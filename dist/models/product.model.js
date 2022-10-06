"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: [true, "El nombre es requerido"],
    },
    description: {
        type: String,
        require: [true, "La descripcion es requerida"],
    },
    price: {
        type: String,
    },
    image: {
        type: String,
        require: [true, "La imagen es requerida"],
    },
});
exports.Product = (0, mongoose_1.model)('Product', productSchema);
