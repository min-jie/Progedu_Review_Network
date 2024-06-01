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

    for record in records['recordData']:
        key = (record['auId'], record['reviewId'])

        if key not in organized_data:
            organized_data[key] = {
                "hwNumber": record["aId"],
                "reviewerUsername": record["reviewerUsername"],
                "reviewerName": record["reviewerName"],
                "authorUsername": record["authorUsername"],
                "authorName": record["authorName"],
                "rounds": []  # Prepare to collect round details
            }
        
        # Append current record's round details
        organized_data[key]['rounds'].append({
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

    final_data = []
    for key, value in organized_data.items():
        reviewer_name = value['reviewerName']
        # 只考慮非 -1 的分數
        valid_scores = [score for score in reviewer_scores.get(reviewer_name, []) if score != -1]
        
        if valid_scores:
            # 如果存在有效分數，則計算平均分
            avg_score = sum(valid_scores) / 6
        # else:
        #     # 如果沒有任何有效分數，可以選擇給一個合理的預設值，或維持不變
        #     avg_score = 0  # 此處以0為例，具體數值應根據業務規則決定

        value['avgReviewScore'] = avg_score
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
