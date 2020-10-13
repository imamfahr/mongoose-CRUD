const express = require('express');
const app = express();

const { 
    getAllBrand,
    getBrandById,
    addBrand,
    updateBrand,
    deleteBrand
} = require('./brand.controller');

app.get('/', getAllBrand);

app.get('/:id', getBrandById);

app.post('/', addBrand);

app.put('/:id', updateBrand);

app.delete('/:id', deleteBrand);

module.exports = app