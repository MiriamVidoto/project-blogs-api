const express = require('express');
const loginRoute = require('./login.routes');

const routes = express.Router();

routes.use('/login', loginRoute);

module.exports = routes;