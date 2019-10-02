const User = require('./index.js');

// Get a User
const getUserInfo = (userId) => {
    return User.findOne({ 'email': userId });
}
// Post a User
const postUserInfo = (userObj) => {
    console.log(`userObj`,userObj)
    return User.create(userObj);
}

// Update
const updateUserInfo = (userId, data) => {
    return User.findOneAndUpdate({ 'email':  userId }, { $push: { userHistory: data } });
}

const removeUserInfo = (userId, data) => {
    return User.findOneAndUpdate({ 'email': userId }, { $pull: { userHistory: data } })
}

// Delete
const deleteUser = (userId) => {
    return User.deleteOne({ 'email': userId });
}

module.exports = {
    getUserInfo,
    postUserInfo,
    updateUserInfo,
    removeUserInfo,
    deleteUser
}