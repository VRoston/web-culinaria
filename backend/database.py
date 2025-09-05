from dotenv import load_dotenv
from os import getenv
import sqlite3

load_dotenv()

def connect():
    conn = sqlite3.connect(getenv('DATABASE_URL'))
    
    if conn:
        return conn
    
    return None