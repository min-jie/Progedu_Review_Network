'''
1. 讀取一個 totalData.json 格式的輸入文件。
2. 對資料進行處理，將其重組為指定的格式。
3. 將處理後的資料寫入到一個新的 hw_num.json 文件。
'''

import json

# 讀取output_file 而不是讀取 "filename" 這樣才可以依據不同aId 來寫入不同資料
def read_json_file(input_file): 
    """Read and return the totalData.json"""
    with open(input_file, 'r', encoding='utf-8') as file:
        return json.load(file)

def write_json_file(data, output_file):
    """Write data to a JSON file."""
    with open(output_file, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=False)

def organize_data(input_data):
    """Organize data by reviewId and round."""
    organized_data = {}
    for record in input_data['recordData']:
        key = (record['auId'], record['reviewId'], record['aId'], record['authorUsername'], record['authorName'], record['reviewerUsername'], record['reviewerName'])
        if key not in organized_data:
            organized_data[key] = {
                "auId": record['auId'],
                "reviewId": record['reviewId'],
                "aId": record['aId'],
                "authorUsername": record['authorUsername'],
                "authorName": record['authorName'],
                "reviewerUsername": record['reviewerUsername'],
                "reviewerName": record['reviewerName'],
                "round": []
            }
        organized_data[key]['round'].append({k: v for k, v in record.items() if k not in key})

    return {"recordData": list(organized_data.values())}

def main():
    # Change these file paths as needed
    input_file = 'totalData.json'  # 讀取當前目錄下的 totalData.json
    output_file = 'Hw_{aId}.json'  # 寫入到當前目錄下的 Hw_{aId}.json，Ex: Hw_2.json
    
    # Read the input data
    input_data = read_json_file(input_file)
    
    # Organize the data
    organized_data = organize_data(input_data)
    
    # Write the organized data to a file
    write_json_file(organized_data, output_file)

if __name__ == "__main__":
    main()
