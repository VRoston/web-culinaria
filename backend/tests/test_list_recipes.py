import os
import tempfile
import sqlite3
from pathlib import Path


def setup_temp_db_from_sql():
    # create a temporary sqlite file and populate from database/db.sql
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


def test_list_recipes():
    db_path = setup_temp_db_from_sql()
    os.environ['DATABASE_URL'] = db_path

    # import app after setting DATABASE_URL
    import sys
    sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
    from app import app

    app.testing = True
    client = app.test_client()

    resp = client.get('/api/recipes')
    assert resp.status_code == 200
    data = resp.get_json()
    assert isinstance(data, list)
    titles = [r.get('title') or r.get('name') for r in data]
    assert 'Spaghetti Carbonara' in titles
