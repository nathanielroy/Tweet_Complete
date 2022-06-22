const signUp = require('./sign-up-user');
const signIn = require('./sign-in-user');

module.exports = {
    paths:{
        '/api/auth/signup':{
            ...signUp
        },
        '/api/auth/signin':{
            ...signIn
        }
    }
}