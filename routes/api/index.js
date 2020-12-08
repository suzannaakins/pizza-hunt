//this file imports all API routes to prefix their endpoint names + package them up

const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

//add prefix of `/pizzas` to routes created in pizza-routes.js
router.use('/pizzas', pizzaRoutes);

module.exports = router;

