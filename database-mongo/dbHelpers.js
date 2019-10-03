const User = require('./index.js');

// Authenticate User Login
const authUser = (userId, password) => {
    return User.findOne({ 'email': userId, 'password': password });
}

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
    return User.update({ 'email':  userId }, { $push: { userHistory: data } });
}

const removeUserInfo = (userId, data) => {
    return User.findOneAndUpdate({ 'email': userId }, { $pull: { userHistory: data } })
}

// Delete
const deleteUser = (userId) => {
    return User.deleteOne({ 'email': userId });
}

module.exports = {
    authUser,
    getUserInfo,
    postUserInfo,
    updateUserInfo,
    removeUserInfo,
    deleteUser
}