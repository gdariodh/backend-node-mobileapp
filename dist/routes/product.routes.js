"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_model_1 = require("../models/product.model");
const route = (0, express_1.Router)();
route.get('/', (req, res) => {
    return res.json({
        product: 'zapatillas',
        msj: "OK GET PRODUCT"
    });
});
route.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    const product = {
        name: body.name,
        description: body.description,
        image: body.image,
        price: body.price
    };
    product_model_1.Product.create(product).then(productDb => {
        return res.json({
            product: 'zapatillas',
            productDb
        });
    }).catch(err => {
        return res.json({
            msg: 'Creacion de producto erronea!'
        });
    });
});
exports.default = route;
