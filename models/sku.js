const mongoose = require('mongoose');

const SkuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    brandId:{
        type: Integer,
        required: true 
    }
})

const Sku = mongoose.model('sku', SkuSchema);
module.exports = Sku;