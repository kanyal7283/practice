const express = require("express");

const app = express();

const AdminAuthRoutes = require('./admin/auth');

// const {AuthController} = require('../controllers/admin/auth-controllers')

app.use('/admin',AdminAuthRoutes);




module.exports = app;