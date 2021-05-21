const express = require('express');
const logger = require('morgan');
const path = require('path');
const uuidv4 = require('uuid').v4;

const indexRouter = require('./router/indexRouter')
const gameRouter = require('./router/gameRouter')

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.listen(3000, function (){
    console.log('server started')
})