const express = require('express')
const app = express();
const bodyparser = require('body-parser');

const {PORT} = require('./config')
console.log('port',PORT);

app.listen(PORT,()=>{
    console.log('server found')
})