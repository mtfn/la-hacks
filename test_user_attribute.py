import unittest
from unittest.mock import MagicMock
from UserAttributeWithAuthZero import User
from AuthZero import app, users

class TestUserAttributeWithAuthZero(unittest.TestCase):

    def setUp(self):
        self.user = User("test_user")

    def test_initialization(self):
        self.assertEqual(self.user.username, "test_user")
        self.assertIsNone(self.user.auth0_id)
        self.assertEqual(self.user.num_wins, 0)

    def test_update_wins(self):
        self.user.update_wins()
        self.assertEqual(self.user.num_wins, 1)

    def test_get_username(self):
        self.assertEqual(self.user.get_username(), "test_user")

    def test_get_num_wins(self):
        self.assertEqual(self.user.get_num_wins(), 0)

    def test_set_auth0_id(self):
        self.user.set_auth0_id("auth0_id")
        self.assertEqual(self.user.auth0_id, "auth0_id")

    def test_get_auth0_id(self):
        self.user.set_auth0_id("auth0_id")
        self.assertEqual(self.user.get_auth0_id(), "auth0_id")

class TestAuthZero(unittest.TestCase):

    def setUp(self):
        app.testing = True
        self.app = app.test_client()

    def test_login(self):
        response = self.app.post('/login', json={"auth0_id": "test_auth0_id", "username": "test_user"})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(users.get("test_auth0_id").username, "test_user")
        self.assertEqual(users.get("test_auth0_id").auth0_id, "test_auth0_id")

    def test_profile(self):
        users["test_auth0_id"] = User("test_user", "test_auth0_id")
        response = self.app.get('/profile', headers={"Authorization": "test_auth0_id"})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json['username'], "test_user")
        self.assertEqual(response.json['num_wins'], 0)

if __name__ == '__main__':
    unittest.main()
