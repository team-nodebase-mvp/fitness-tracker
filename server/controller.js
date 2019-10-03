const {
    authUser,
    getUserInfo,
    postUserInfo,
    updateUserInfo,
    removeUserInfo,
    deleteUser
} = require('../database-mongo/dbHelpers.js');

const authController = (req, res) => {
    let { email, password } = req.query;
    authUser(email, password)
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(400).send(error))
}

const getController = (req, res) => { //gets exercise for user
    let { email, password } = req.query;
    getUserInfo(email)
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(400).send(error))
}

const postController = (req, res) => {
    // res.send(200).status(req.query)
    let { email, password, userHistory } = req.body.params;
    postUserInfo({ email:email, password:password, userHistory: userHistory })
    .then(() => res.status(201).send('Posted!'))
    .catch((error) => res.status(401).send(error))
}

const updateController = (req, res) => {
    let { email, userHistoryObj } = req.body.params;
    // let { query } = req;
    // let { body } = req;
    updateUserInfo(email, userHistoryObj)
    .then((response) => res.status(202).send(response))
    .catch((error) => res.status(402).send(error))
}
const removeController = (req, res) => {
    let { query } = req;
    let { body } = req;
    removeUserInfo(query.email, body)
    .then((response) => res.status(202).send(response))
    .catch((error) => res.status(402).send(error))
}

const deleteController = (req, res) => {
    let { email } = req.query;
    deleteUser(email)
    .then((response) => res.status(203).send(response))
    .catch((error) => res.status(403).send(error))
}

module.exports = {
    authController,
    getController,
    postController,
    updateController,
    removeController,
    deleteController
}


