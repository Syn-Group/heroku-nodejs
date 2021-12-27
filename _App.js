const express = require('express')
const path = require('path')
const Router = require('./routers/router');

const App = express();

App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.use(express.static(path.join(__dirname, '@public')))

App.set('views', path.join(__dirname, 'views'))
App.set('view engine', 'ejs');

App.use('/', Router);

App.use('/', async (request, response) => {
  response.send('ERRO 404')
});

module.exports = App;