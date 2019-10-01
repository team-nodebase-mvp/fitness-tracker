const {
    getUserInfo,
    postUserInfo,
    updateUserInfo,
    deleteUser
} = require('../database-mongo/dbHelpers.js');

const getController = (req, res) => {
    let { email } = req.body;
    getUserInfo(email)
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(400).send(error))
}

const postController = (req, res) => {
    let { body } = req;
    postUserInfo(body)
    .then(() => res.status(201).send('Posted!'))
    .catch((error) => res.status(401).send(error))
}

const updateController = (req, res) => {
    let { query } = req;
    let { body } = req;
    updateUserInfo(query, body)
}

const deleteController = (req, res) => {
    let { email } = req.body;
    deleteUser(email)
    .then((response) => res.status(203).send(response))
    .catch((error) => res.status(403).send(error))
}

module.exports = {
    getController,
    postController,
    updateController,
    deleteController
}


