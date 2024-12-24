from inference import load_model, predict_from_json
import torch

# 初始化模型
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model_path = './fine-tuned-Robert-chinese'  # 替換為你的模型路徑
model, tokenizer = load_model(model_path, device)

# 構建測試輸入
json_input = {
    "texts": [
        "這是一個正面的句子。",
        "這是一個負面的句子。",
        "模型推論是否正確？"
    ]
}

# 執行推論
results = predict_from_json(model, tokenizer, device, json_input)

# 輸出結果
print("推論結果：")
for result in results:
    print(f"文本: {result['text']}, 預測: {result['label']}, 信心: {result['confidence']:.2f}")