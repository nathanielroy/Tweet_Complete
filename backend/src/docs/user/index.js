const getUser = require('./get-user');
const getUserFriends = require('./get-user-friends');
const updateFollowUser= require('./update-follow-user');
const updateUnFollowUser = require('./update-follow-user');
const updateUser = require('./update-user');
const deleteUser = require('./delete-user');

const signUp = require('./sign-up-user');
const signIn = require('./sign-in-user');

module.exports = {
    paths: {
        '/api/auth/signup':{
            ...signUp
        },
        '/api/auth/signin':{
            ...signIn
        },
        '/api/users/{id}':{
            ...getUser,
            ...updateUser,
            ...deleteUser
        },
        '/api/users/friends/{id}':{
            ...getUserFriends
        },
        '/api/users/{id}/follow':{
            ...updateFollowUser,
        },
        '/api/users/{id}/unfollow':{
            ...updateUnFollowUser,
        }
    }
}