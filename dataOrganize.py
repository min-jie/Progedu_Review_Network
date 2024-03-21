import json

# 讀檔
def read_json_file(file_path):
    """Read and return the content of a JSON file."""
    with open(file_path, 'r', encoding='utf-8') as file:
        print('read file success')
        return json.load(file)

# 寫檔
def write_json_file(data, file_path):
    """Write data to a JSON file."""
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=False)
        print('write file success')

# 用作業編號 aId 去做篩選
def filter_and_organize_data(input_data, target_aId):
    #print('test filter & org func')
    filtered_data = [record for record in input_data['recordData'] if record['aId'] == target_aId]
    return {"recordData": filtered_data}

def organize_data_based_on_round(records):
    organized_data = {}

    for record in records['recordData']:
        key = (record['auId'], record['reviewId'], record['aId'], record['authorUsername'],
               record['authorName'], record['reviewerUsername'], record['reviewerName'])
        
        if key not in organized_data:
            # 初始化記錄，除了 round 相關信息外，其餘屬性保持不變
            organized_data[key] = {k: v for k, v in record.items() if k not in ['score', 'time', 'feedback', 'reviewScore', 'teacherReview', 'status', 'pmId', 'round']}
            organized_data[key]['round'] = []

        # 添加 round 相關信息
        organized_data[key]['round'].append({
            "score": record["score"],
            "time": record["time"],
            "feedback": record["feedback"],
            "reviewScore": record["reviewScore"],
            "teacherReview": record["teacherReview"],
            "status": record["status"],
            "pmId": record["pmId"],
            "round": record["round"]
        })

    # 將組織好的資料轉換成最終格式
    return {"recordData": list(organized_data.values())}

# 使用過濾後的資料而不是 original_records
# transformed_data = organize_data_based_on_round(organized_data)   


# 假設的原始資料
original_records = [
    # 假設的記錄列表
]






def main():
    target_aIds = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]  # 想要處理的 auId 列表，只有 Hw_2 3 4 5 6 8
    input_file = 'totalData.json'
    
    input_data = read_json_file(input_file)
    
    #print('test 3/20')
    for aId in target_aIds:
        print(f"Processing auId: {aId}")
        organized_data = filter_and_organize_data(input_data, aId)
        
        if organized_data['recordData']:
            # 應該對 organized_data 調用 organize_data_based_on_round 函數
            transformed_data = organize_data_based_on_round(organized_data)  # 而非 original_records

            output_file = f'Hw_{aId}.json'
            write_json_file(transformed_data, output_file)
            print(f"File written: {output_file}")
        else:
            print(f"No data for aId: {aId}")



if __name__ == "__main__":
    main()
