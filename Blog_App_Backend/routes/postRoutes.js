const express = require('express');
const router = express.Router();

//dbconnection 
const connectDB = require('../config/db');
connectDB;
//end

const login = require('../controller/usersController');
const register = require('../controller/usersController');
const profile = require('../controller/usersController');

router.post('/login',login.login);
router.post('/register',register.register);
router.get('/profile/:email',profile.profile);

module.exports = router;