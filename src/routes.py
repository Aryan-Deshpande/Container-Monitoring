
from flask import request
from src import app

@app.route('/landing', methods=['GET'])
def get_data():
    
    # get some sort of data from the DB
    return 'data'



