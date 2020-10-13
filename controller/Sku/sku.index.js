const express = require('express');
const app = express();

const { 
    getAllSku,
    getSkuById,
    addSku,
    updateSku,
    deleteSku
} = require('./sku.controller');

app.get('/', getAllSku);

app.get('/:id', getSkuById);

app.post('/', addSku);

app.put('/:id', updateSku);

app.delete('/:id', deleteSku);

module.exports = app