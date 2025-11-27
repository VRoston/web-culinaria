import os
import tempfile
import sqlite3
from pathlib import Path


def setup_temp_db_from_sql():
    repo_root = Path(__file__).resolve().parents[2]
    sql_path = repo_root / 'database' / 'db.sql'

    tmp = tempfile.NamedTemporaryFile(suffix='.db', delete=False)
    tmp.close()

    conn = sqlite3.connect(tmp.name)
    with open(sql_path, 'r', encoding='utf-8') as f:
        sql = f.read()
    conn.executescript(sql)
    conn.close()

    return tmp.name


def test_create_recipe():
    db_path = setup_temp_db_from_sql()
    os.environ['DATABASE_URL'] = db_path

    import sys
    sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
    from app import app

    app.testing = True
    client = app.test_client()

    new_recipe = {
        'title': 'Test Pancakes',
        'description': 'Simple pancakes',
        'preparation_time': 10,
        'servings': 2,
        'ingredients': 'Flour, Milk, Egg',
        'instructions': 'Mix and fry',
        'image_path': '/images/pancakes.jpg'
    }

    post_resp = client.post('/api/recipes', json=new_recipe)
    assert post_resp.status_code in (200, 201)
    j = post_resp.get_json()
    # success message expected
    assert 'success' in j or post_resp.status_code == 200

    # now fetch list and ensure new recipe present
    resp = client.get('/api/recipes')
    assert resp.status_code == 200
    data = resp.get_json()
    titles = [r.get('title') or r.get('name') for r in data]
    assert 'Test Pancakes' in titles
