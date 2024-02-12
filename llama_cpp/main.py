import os
from llama_cpp import Llama
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

load_dotenv()
model_name = os.getenv("MODEL_NAME")
model_path = "./models/" + model_name
model = Llama(model_path=model_path)

def generate_response(model, user_message):
    prompt = f"""#Instruction: 次の会話に100文字以内で答えて。{user_message} #Response:"""
    max_tokens = 100
    output = model(prompt, max_tokens=max_tokens, echo=True)
    result = output["choices"][0]["text"].split("Response: ", 1)[-1]
    return result

app = Flask(__name__)
CORS(app)
@app.route('/chat', methods=['POST'])
def chat():
    json_data = request.json
    result = generate_response(model, json_data['text'])
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)
