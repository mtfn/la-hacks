from flask import Flask, request, jsonify
from UserAttributeWithAuthZero import User

app = Flask(__name__)
users = {}

@app.route('/login', methods=['POST'])
def login():
    auth0_id = request.json.get('auth0_id')
    username = request.json.get('username')
    # Create or retrieve the user object based on the Auth0 ID
    user = users.get(auth0_id)
    if not user:
        user = User(username, auth0_id)
        users[auth0_id] = user
    user.login_status = True
    return jsonify({'message': 'Login successful'})

@app.route('/profile', methods=['GET'])
def profile():
    auth0_id = request.headers.get('Authorization')
    user = users.get(auth0_id)
    if not user:
        return jsonify({'message': 'User not found'}), 404
    return jsonify({'username': user.username, 'num_wins': user.num_wins})

if __name__ == '__main__':
    app.run(debug=True)
