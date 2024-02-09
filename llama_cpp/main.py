import os
from llama_cpp import Llama
from dotenv import load_dotenv

load_dotenv()
model_name = os.getenv("MODEL_NAME")
model_path = "./models/" + model_name

model = Llama(model_path=model_path)

prompt = """### Instruction: What is the height of Mount Fuji?
### Response:"""

# 推論の実行
output = model(
    prompt,
    temperature=0.1,
    stop=["Instruction:", "Input:", "Response:", "\n"],
    echo=True,
)

print(output["choices"][0]["text"])
