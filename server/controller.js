const {
    getUserInfo,
    postUserInfo,
    updateUserInfo,
    deleteUser
} = require('../database-mongo/dbHelpers.js');

const getController = (req, res) => {
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
    let { query } = req;
    let { body } = req;
    updateUserInfo(query.email, body)
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
    getController,
    postController,
    updateController,
    deleteController
}


