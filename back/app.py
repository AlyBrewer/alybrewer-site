from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)


@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({
        "title": "Welcome to My Wireframe Site",
        "content": "This is a basic wireframe created with React and Flask!"
    })

if __name__ == '__main__':
    app.run(debug=True)
