const User = require('./index.js');

// Get a User
const getUserInfo = (userId) => {
    return User.findOne({ 'email': userId });
}
// Post a User
const postUserInfo = (userObj) => {
    return User.create(userObj);
}

// Update

// Delete
const deleteUser = (userId) => {
    return User.deleteOne(userId);
}

module.exports = {
    getUserInfo,
    postUserInfo,
    deleteUser
}