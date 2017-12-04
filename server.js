const express = require('express');
const app = express();
const http = require('http');
const router = express.Router();
const bodyParser = require('body-parser'); 
const path = require('path');

app.use(express.static(path.join(__dirname, 'front-end')));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 8080);

const survey = require('./survey')(router);
app.use('/survey', survey);

const server = http.createServer(app).listen(app.get('port'), function() {
    console.log('Open server at 8080 port');
});