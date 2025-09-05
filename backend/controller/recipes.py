from flask import jsonify
from .. import database as db
import sqlite3

def index():
    conn = db.connect()
    cur = conn.cursor()

    cur.execute("SELECT * FROM receitas")

    recipes = cur.fetchall()

    data = []
    for r in recipes:
        data.append({
            'id': r['id'],
            'title': r['title'],
            'recipe': r['recipe'],
            'image': r['image']
        })
    
    return data