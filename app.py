#!flask/bin/python
from flask import Flask, request, jsonify, render_template
from flask_cors import cross_origin

from RandomForest import RandomForest

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/process-inputs')
@cross_origin()
def processInputs():
    inputs = request.args.get('inputs')
    inputList = inputs.split(',')
    print(inputList)
    return jsonify({'result': machine_learning_func(inputList)})

def machine_learning_func(inputs: list) -> float:
    rand = RandomForest()
    return rand.predict(inputs)[0]

if __name__ == '__main__':
    app.run(debug=True)