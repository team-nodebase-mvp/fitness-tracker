const express = require('express');
const router = express.Router();
const {
    getController,
    postController,
    updateController,
    deleteController
} = require('./controller.js');

router
    .route('/user')
    .get(getController)
    .post(postController)
    .put(updateController)
    .delete(deleteController)

module.exports = router;