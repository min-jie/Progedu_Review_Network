import json

def read_json_file(file_path):
    """Read and return the content of a JSON file."""
    with open(file_path, 'r', encoding='utf-8') as file:
        print('read file success')
        return json.load(file)

def write_json_file(data, file_path):
    """Write data to a JSON file."""
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=False)
        print('write file success')

def filter_and_organize_data(input_data, target_aId):
    print('test filter & org func')
    filtered_data = [record for record in input_data['recordData'] if record['auId'] == target_aId]
    return {"recordData": filtered_data}


def organize_data_based_on_your_criteria(filtered_data):
    print('test organize func')
    return {"recordData": filtered_data}

def main():
    target_aIds = [2, 3, 4, 5, 6, 7, 8, 9, 10]  # 想要處理的 auId 列表
    input_file = 'totalData.json'
    
    input_data = read_json_file(input_file)
    
    print('test 3/20')
    for aId in target_aIds:
        print(f"Processing auId: {aId}")
        organized_data = filter_and_organize_data(input_data, aId)
        print(f"Organized data: {organized_data}")  # 查看過濾結果

        if organized_data['recordData']:
            output_file = f'Hw_{aId}.json'
            write_json_file(organized_data, output_file)
            print(f"File written: {output_file}")
        else:
            print(f"No data for aId: {aId}")



if __name__ == "__main__":
    main()
