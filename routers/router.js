
const express = require('express');
const Router = express.Router();

Router.get('/', (request, response) => {
    response.render('index/index')
});

module.exports = Router;