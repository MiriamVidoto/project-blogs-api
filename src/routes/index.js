const express = require('express');
const loginRoute = require('./login.routes');
const userRoutes = require('./user.routes');
const categoriesRoutes = require('./categories.routes');
const postRoutes = require('./post.routes');

const routes = express.Router();

routes.use('/login', loginRoute);
routes.use('/user', userRoutes);
routes.use('/categories', categoriesRoutes);
routes.use('/post', postRoutes);

module.exports = routes;