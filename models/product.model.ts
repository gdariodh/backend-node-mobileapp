import { Document, model, Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    require: [true, "El nombre es requerido"],
  },
  description: {
    type: String,
    require: [true, "La descripcion es requerida"],
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
    require: [true, "La imagen es requerida"],
  },
});

interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const Product = model<IProduct>('Product', productSchema)