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
const updateUserInfo = (userId, data) => {
    return User.findOneAndUpdate({ 'email':  userId }, {$push: { userHistory: data } });
}

// Delete
const deleteUser = (userId) => {
    return User.deleteOne({ 'email': userId });
}

module.exports = {
    getUserInfo,
    postUserInfo,
    updateUserInfo,
    deleteUser
}