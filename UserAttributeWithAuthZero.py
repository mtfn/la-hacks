class User:
    def __init__(self, username, auth0_id=None):
        self.username = username
        self.auth0_id = auth0_id
        self.num_wins = 0

    def update_wins(self):
        self.num_wins += 1

    def get_username(self):
        return self.username

    def get_num_wins(self):
        return self.num_wins

    def set_auth0_id(self, auth0_id):
        self.auth0_id = auth0_id

    def get_auth0_id(self):
        return self.auth0_id

