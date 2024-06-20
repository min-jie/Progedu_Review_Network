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

    # 暫存每個 reviewer 的所有有效 reviewScore
    reviewer_scores = {}

    # 第一步：累積每個 reviewer 的所有 reviewScore
    for key, value in organized_data.items():
        reviewer_name = value['reviewerName']
        rounds = value.get('round', [])

        if reviewer_name not in reviewer_scores:
            reviewer_scores[reviewer_name] = []

        for round_info in rounds:
            score = round_info.get('reviewScore', -1)
            reviewer_scores[reviewer_name].append(score)

    # 檢查累積結果
    for reviewer, scores in reviewer_scores.items():
        print(f"Reviewer: {reviewer}, Scores: {scores}")

    # 第二步：計算每個 reviewer 的 avgReviewScore
    reviewer_avg_scores = {}
    for reviewer, scores in reviewer_scores.items():
        valid_scores = [score for score in scores if score != -1]
        if valid_scores:
            avg_score = sum(valid_scores) / len(valid_scores)
        else:
            avg_score = 'No Scores Available'  # 可以根據需要設置為 '0'，'No Scores' 或其他
        reviewer_avg_scores[reviewer] = avg_score

    # 檢查計算結果
    for reviewer, avg_score in reviewer_avg_scores.items():
        print(f"Reviewer: {reviewer}, Average Score: {avg_score}")

    # 第三步：將 avgReviewScore 更新到對應的 reviewerName 作為 authorName 的資料中
    for key, value in organized_data.items():
        reviewer_name = value['reviewerName']
        author_name = value['authorName']
        avg_score = reviewer_avg_scores.get(reviewer_name, 'No Scores Available')

        if author_name in reviewer_avg_scores:
            # 更新 avgReviewScore
            value['avgReviewScore'] = reviewer_avg_scores[author_name]

            # 打印 authorName, reviewScore 以及 avgReviewScore
            print(f"Author Name: {author_name}")
            print(f"Reviewer Name: {reviewer_name}")
            print(f"Average Review Score: {reviewer_avg_scores[author_name]}")
            print('---')

    # 檢查更新後的 organized_data
    print("\nUpdated organized_data:")
    for key, value in organized_data.items():
        print(value)

    # 計算reviewer給出的feedback平均字數    
    for key, value in organized_data.items():
        reviewer_name = value['reviewerName']
        author_name = value['authorName']

        # 計算reviewer給出的feedback平均字數
        feedback_lengths = reviewer_feedback_lengths.get(reviewer_name, [])
        if feedback_lengths:
            avg_feedback_length = sum(feedback_lengths) / len(feedback_lengths)
        else:
            avg_feedback_length = 0

        # 將平均字數存儲在每條記錄中
        value['avgFeedbackLength'] = avg_feedback_length

        # 更新所有符合條件的記錄
        for other_value in organized_data.values():
            if other_value['authorName'] == reviewer_name:
                other_value['avgFeedbackLength'] = avg_feedback_length

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
