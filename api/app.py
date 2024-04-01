from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods={'GET'})
def teste():
    return jsonify({'status': 200})