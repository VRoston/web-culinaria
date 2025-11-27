# from dotenv import load_dotenv
import os
import sqlite3

# load_dotenv()

def connect():
    conn = sqlite3.connect(os.getenv('DATABASE_URL'))
    
    if conn:
        return conn
    
    return None