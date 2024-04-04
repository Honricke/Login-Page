from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods={'POST'})
def teste():
    teste = request.json
    print(teste)
    return jsonify({'status': 200})