from flask import Flask
from flask_cors import CORS
from src.api import api

app = Flask(__name__)
CORS(app)
#cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
app.register_blueprint(api)

from src import routes, api

