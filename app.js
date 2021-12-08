require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const router = require('./router/router');
app.use('/api', router);

module.exports = app;
