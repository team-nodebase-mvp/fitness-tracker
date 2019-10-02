const express = require('express');
const router = express.Router();
const {
    authController,
    getController,
    postController,
    updateController,
    removeController,
    deleteController
} = require('./controller.js');

router
    .route('/user')
    .get(getController)
    .post(postController)
    .put(updateController)
    .delete(deleteController)

router
    .route('/login')
    .get(authController)
    
router
    .route('/pull')
    .put(removeController)

module.exports = router;