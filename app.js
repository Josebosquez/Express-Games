const express = require('express');
const logger = require('morgan');
const path = require('path');

const indexRouter = require('./router/indexRouter')
const gameRouter = require('./router/gameRouter')

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/api/game', gameRouter)
app.use('/', indexRouter)

app.listen(3000, function (){
    console.log('server started')
})