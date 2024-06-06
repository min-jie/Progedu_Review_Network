import json

# Read file function
def read_json_file(file_path):
    """Read and return the content of a JSON file."""
    with open(file_path, 'r', encoding='utf-8') as file:
        print('read file success')
        return json.load(file)

# Write file function
def write_json_file(data, file_path):
    """Write data to a JSON file."""
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=False)
        print('write file success')

# Filter data based on aId
def filter_and_organize_data(input_data, target_aId):
    filtered_data = [record for record in input_data['recordData'] if record['aId'] == target_aId]
    return {"recordData": filtered_data}

def organize_data_based_on_round(records):
    organized_data = {}
    reviewer_scores = {}
    reviewer_feedback_lengths = {}

    for record in records['recordData']:
        key = (record['auId'], record['reviewId'])

        if key not in organized_data:
            organized_data[key] = {
                "reviewId": record['reviewId'],
                "hwNumber": record["aId"],
                "reviewerUsername": record["reviewerUsername"],
                "reviewerName": record["reviewerName"],
                "authorUsername": record["authorUsername"],
                "authorName": record["authorName"],
                "round": []  # Prepare to collect round details
            }
        
        # Append current record's round details
        organized_data[key]['round'].append({
            "round": record["round"],
            "score": record["score"],
            "time": record["time"],
            "feedback": record["feedback"],
            "reviewScore": record["reviewScore"],
            "teacherReview": record["teacherReview"],
            "status": record["status"],
            "pmId": record["pmId"]
        })

        # Collect scores for calculating average, excluding reviewScore of -1
        if record["reviewScore"] != -1:
            reviewer = record["reviewerName"]
            if reviewer not in reviewer_scores:
                reviewer_scores[reviewer] = []
            reviewer_scores[reviewer].append(record["reviewScore"])

        # Collect feedback lengths for calculating average
        reviewer = record["reviewerName"]
        feedback_length = len(record["feedback"].strip())
        if reviewer not in reviewer_feedback_lengths:
            reviewer_feedback_lengths[reviewer] = []
        reviewer_feedback_lengths[reviewer].append(feedback_length)

    final_data = []
    final_data = []

    for key, value in organized_data.items():
        reviewer_name = value['reviewerName']
        author_name = value['authorName']

        # 取得reviewer的所有分數
        scores = reviewer_scores.get(reviewer_name, [])

        # 檢查是否存在非 -1 的分數
        valid_scores = [score for score in scores if score != -1]

        if valid_scores:
            # 如果存在有效分數，則計算平均分
            avg_score = sum(valid_scores) / len(valid_scores)
        elif scores:
            # 如果所有分數都是 -1，設置 avgReviewScore 為 -1
            avg_score = -1
        else:
            # 如果沒有任何分數，設置為0或特定的無效提示
            avg_score = 'No Scores Available'  # 可以根據需要設置為 '0'，'No Scores' 或其他

        value['avgReviewScore'] = avg_score

        # 計算reviewer給出的feedback平均字數
        feedback_lengths = reviewer_feedback_lengths.get(reviewer_name, [])
        if feedback_lengths:
            avg_feedback_length = sum(feedback_lengths) / len(feedback_lengths)
        else:
            avg_feedback_length = 0

        # 將平均字數存儲在每條記錄中
        value['avgFeedbackLength'] = avg_feedback_length

        final_data.append(value)



    return {"recordData": final_data}



def main():
    target_aIds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    input_file = 'totalData.json'
    
    input_data = read_json_file(input_file)
    
    for aId in target_aIds:
        print(f"Processing auId: {aId}")
        organized_data = filter_and_organize_data(input_data, aId)
        
        if organized_data['recordData']:
            transformed_data = organize_data_based_on_round(organized_data)
            output_file = f'Hw_{aId}.json'
            write_json_file(transformed_data, output_file)
            print(f"File written: {output_file}")
        else:
            print(f"No data for aId: {aId}")

        print('\n')

if __name__ == "__main__":
    main()
