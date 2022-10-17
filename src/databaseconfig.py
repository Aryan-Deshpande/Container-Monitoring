from os import environ
from pymongo import MongoClient, errors
import pymongo
def connect():
    try:
        env = environ.get('URI')
        client = pymongo.MongoClient(env)
        client.server_info()
        db = client.database
        return db
    except errors.OperationFailure as e:
        print(e)
        return e

db = connect()
data = db.data