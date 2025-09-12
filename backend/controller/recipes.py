from flask import jsonify, request
import database as db
import sqlite3

def index():
    """
    Returns a simplified indexing of all recipes
    """
    conn = db.connect()
    cur = conn.cursor()
    cur.row_factory = sqlite3.Row

    cur.execute("SELECT * FROM recipes")

    recipes = cur.fetchall()

    data = []
    for r in recipes:
        data.append({
            'id': r['id'],
            'title': r['title'],
            'description': r['description'],
            'preparation_time': r['preparation_time'],
            'servings': r['servings'],
            'image_path': r['image_path']
        })
    
    return data

def show(id: int):
    """
    Returns a single recipes data in a 
    """
    conn = db.connect()
    cur = conn.cursor()
    cur.row_factory = sqlite3.Row

    cur.execute("SELECT * FROM recipes WHERE id = ?", (id,))

    recipe = cur.fetchone()

    data = {
        'id': recipe['id'],
        'title': recipe['title'],
        'description': recipe['description'],
        'preparation_time': recipe['preparation_time'],
        'servings': recipe['servings'],
        'ingredients': recipe['ingredients'],
        'instructions': recipe['instructions'],
        'image_path': recipe['image_path']
    }
    
    return data

def create():
    """
    Creates an instance recipe 
    """
    title = request.json.get('title')
    description = request.json.get('description')
    preparation_time = request.json.get('preparation_time')
    servings = request.json.get('servings')
    ingredients = request.json.get('ingredients')
    instructions = request.json.get('instructions')
    image_path = request.json.get('image_path')

    if not (title or description or preparation_time or servings or ingredients or instructions or image_path):
        return jsonify({'error': 'all fields are required'}), 400

    conn = db.connect()
    cur = conn.cursor()

    try:
        cur.execute("""
                    INSERT INTO recipes (title, description, preparation_time, servings, ingredients, instructions, image_path)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                    """, (title, description, preparation_time, servings, ingredients, instructions, image_path))

        conn.commit()
    except:
        conn.rollback()
        return jsonify({'error': 'An error occurred while creating the recipe.'}), 500
    finally:
        conn.close()

    return jsonify({'success': 'Successfully created the recipe.'})