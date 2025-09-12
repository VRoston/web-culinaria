from flask import Flask, jsonify, request
from controller import recipes as r

app = Flask(__name__)
app.config['SECRET_KEY']='supersecretkey'

@app.route('/api/recipes', methods=['GET', 'POST'])
def recipes():
    if request.method == 'POST':
        return r.create()
    return r.index()

@app.route('/api/recipe/<int:id_recipe>', methods=['GET'])
def recipe(id_recipe):
    return r.show(id_recipe)

@app.route('/api/oquevcquiser', methods=['GET'])
def health_check():
    return jsonify(status='ok'), 200
