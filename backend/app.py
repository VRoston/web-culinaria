from flask import Flask, jsonify

app = Flask(__name__)
app.config['SECRET_KEY']='supersecretkey'
@app.route('/api/oquevcquiser', methods=['GET'])
def health_check():
    return jsonify(status='ok'), 200
