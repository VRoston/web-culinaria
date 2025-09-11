from flask import Flask, jsonify
from controller import recipes as r

app = Flask(__name__)
app.config['SECRET_KEY']='supersecretkey'

@app.route('/api/recipes', methods=['GET'])
def recipes():
    return r.index()


@app.route('/api/oquevcquiser', methods=['GET'])
def health_check():
    return jsonify(status='ok'), 200
