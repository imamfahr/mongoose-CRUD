
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { PORT, MONGODB_URI_LIVE, dbMongo } = require('./config/index');
const localPort = PORT || 3000;

const brand = require('./controller/Brand/brand.index')
const sku = require('./controller/Sku/sku.index')

console.log("port: ", PORT);
console.log("MONGODB_URI_LIVE: ", MONGODB_URI_LIVE);

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('connection is success')
});

app.use('/brand',brand)
app.use('./sku',sku)

if (dbMongo) {
    app.listen(localPort, ()=>{
        console.log(`server run on port: ${localPort}`);
    });
} else {
    console.log('your connection failed');
};