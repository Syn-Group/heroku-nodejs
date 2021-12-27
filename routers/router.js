const homeController = require('../controllers/homeController')
const middleware = require('../middlewares/middleware')

const express = require('express');
const Router = express.Router();

Router.get('/',
    middleware["action"],
    homeController["index"]
    );

module.exports = Router;