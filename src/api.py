from flask import Blueprint, jsonify, request, json
from flask_cors import cross_origin

#from torchdir.model import load_model, inference
from src.databaseconfig import connect, data

import datetime

api = Blueprint('api', __name__, url_prefix='/api')

location = "joe"
devices = {"joe": ['1','2','3']}

# returns output according to input provided
"""@api.route('/prediction', methods=['GET'])
def test():
    model = load_model()
    infer = inference(1, 2, model)
    return json.dumps(infer)"""

@cross_origin()
@api.route('/get_data', methods=['GET'])
def get_data():
    # get some sort of data from the DB
    response = data.find({}, {"_id": 0})
    return jsonify(list(response))
    print(response)
    return f'{response}'

@api.route('/set_data', methods=['GET','POST'])
def index():

    aggregate = {}
    request_obj = request.json['distance']
    request_obj2 = request.json['time']
    request_obj3 = request.json['Sno']

    aggregate['distance'] = request_obj
    aggregate['time'] = request_obj2
    aggregate['Sno'] = request_obj3

    data.insert_one(aggregate)
    return 'Success'