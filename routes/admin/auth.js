const express = require('express');
const router = express.Router();

const {AuthController} = require('../../controllers/admin/auth-controllers');



// sign up admin 
router.post('/signup',AuthController.signUp);



module.exports = router;