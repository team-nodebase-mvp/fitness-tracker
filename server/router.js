const express = require('express');
const router = express.Router();
const {
    getController,
    postController,
    deleteController
} = require('./controller.js');

router
    .route('/user')
    .get(getController)
    .post(postController)
    .delete(deleteController)

module.exports = router;