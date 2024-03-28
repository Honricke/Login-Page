from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/', methods={'GET'})
def teste():
    return jsonify({'status': 200})