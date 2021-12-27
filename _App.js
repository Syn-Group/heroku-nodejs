const express = require('express')
const path = require('path')

const Router = require('./routers/router');
const Handler = require('./errors/handler');

const App = express();

App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.use(express.static(path.join(__dirname, '@public')))

App.set('views', path.join(__dirname, 'views'))
App.set('view engine', 'ejs');

App.use('/', Router);

App.use('/', Handler['not-found']);

module.exports = App;