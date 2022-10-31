const express = require('express');
const loginRoute = require('./login.routes');
const userRoutes = require('./user.routes');

const routes = express.Router();

routes.use('/login', loginRoute);
routes.use('/user', userRoutes);

module.exports = routes;