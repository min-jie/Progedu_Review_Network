import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

# 初始化模型和 tokenizer
def load_model(model_path: str, device: torch.device):
    tokenizer = AutoTokenizer.from_pretrained(model_path)
    model = AutoModelForSequenceClassification.from_pretrained(model_path)
    model.to(device)
    model.eval()  # 切換到評估模式
    return model, tokenizer

# 推論 function
def predict_from_json(model, tokenizer, device, json_input: dict):
    """
    根據 JSON 輸入進行推論
    :param model: 已加載的模型
    :param tokenizer: 已加載的 tokenizer
    :param device: 使用的設備（CPU/GPU）
    :param json_input: 包含文本的 JSON 數據，格式如 {"texts": ["句子1", "句子2"]}
    :return: 預測結果列表，格式如 [{"text": "句子1", "label": "正面", "confidence": 0.95}, ...]
    """
    texts = json_input.get("texts", [])
    if not texts:
        raise ValueError("JSON input must contain 'texts' key with a list of sentences.")

    # 將文本轉換為模型輸入
    inputs = tokenizer(
        texts,
        padding=True,
        truncation=True,
        max_length=128,
        return_tensors="pt"
    )
    inputs = {key: value.to(device) for key, value in inputs.items()}

    # 禁用梯度計算，進行推論
    with torch.no_grad():
        outputs = model(**inputs)
        logits = outputs.logits
        probabilities = torch.softmax(logits, dim=-1)
        predicted_classes = torch.argmax(probabilities, dim=-1)

    # 定義標籤對應
    label_map = {0: "負面", 1: "正面"}  # 替換為你的標籤定義
    results = [
        {
            "text": text,
            "label": label_map[pred_class.item()],
            "confidence": prob[pred_class.item()].item()
        }
        for text, prob, pred_class in zip(texts, probabilities, predicted_classes)
    ]

    return results