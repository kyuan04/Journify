from flask import Flask, request, jsonify
from flask_cors import CORS
import datetime
from test import test
from cohere_api import generate_text


x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
CORS(app)


@app.route("/generate_text_test", methods=["POST"])
def generate_text_test():
    data = request.json
    print(data)
    # assuming generate_text takes a string as input
    generated_text = generate_text(data)
    response = {
        "data": {
            "generated_text": generated_text
        }
    }

    return jsonify(response)

@app.route('/yelp', methods=['GET'])
def yelp_api():
    location = request.args.get('location')
    url = f"https://api.yelp.com/v3/businesses/search?location={location}&sort_by=best_match&limit=20"
    headers = {
        "accept": "application/json",
        "Authorization": "Bearer -qzIgLWa-gy3cnbiXjFLDRG86NebZoUmchyEA_SjVeS4AUqOS6R3YOCU1U5BCbrPaT3CWTEcmvycEA5nyHr9472XweTn4JzPlxRgC2vDfMbKglfntXcJrKsoi01EZHYx"
    }
    response = requests.get(url, headers=headers)
    return jsonify(response.json())

# Route for seeing a data
@app.route('/data', methods=["GET"])
def get_time():
    print("penis")
    # Returning an api for showing in  reactjs
    return {
        'Name': "geek",
        "Age": "22",
        "Date": x,
        "programming": "python"
    }


# app.route gets called from API Service in frontend component
# test is an outside function inside journify'd backend folder, can be anything
# run server.py first then npm.start in frontend terminal
@app.route("/add", methods=["POST"], strict_slashes=False)
def add_articles():
    title = request.json['title']
    body = request.json['body']
    print("HERE")

    return jsonify({"title": "penis", "body": "asshol"})


# Running app
if __name__ == '__main__':
    app.run(debug=True)
