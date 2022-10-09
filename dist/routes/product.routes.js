"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_model_1 = require("../models/product.model");
const route = (0, express_1.Router)();
route.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_model_1.Product.find();
    return res.json({
        ok: true,
        products,
    });
}));
route.post("/", (req, res) => {
    const body = req.body;
    const product = {
        name: body.name,
        description: body.description,
        image: body.image,
        price: body.price,
    };
    product_model_1.Product.create(product)
        .then((productDb) => {
        return res.json({
            product: "zapatillas",
            productDb,
        });
    })
        .catch((err) => {
        return res.json({
            msg: "Creacion de producto erronea!",
        });
    });
});
route.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const productId = req.params.id;
    const product = {
        name: body.name,
        description: body.description,
        image: body.image,
        price: body.price,
    };
    yield product_model_1.Product.findByIdAndUpdate(productId, product);
    return res.json({
        ok: true,
        msg: "producto actualizado"
    });
}));
exports.default = route;
