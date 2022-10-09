import { Router, Response, Request } from "express";
import { Product } from "../models/product.model";

const route = Router();

route.get("/", async (req: Request, res: Response) => {
  const products = await Product.find();

  return res.json({
    ok: true,
    products,
  });
});

route.post("/", (req: Request, res: Response) => {
  const body = req.body;

  const product = {
    name: body.name,
    description: body.description,
    image: body.image,
    price: body.price,
  };

  Product.create(product)
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

route.put("/:id", async (req: Request, res: Response) => {
  const body = req.body;
  const productId = req.params.id;

  const product = {
    name: body.name,
    description: body.description,
    image: body.image,
    price: body.price,
  };

   await Product.findByIdAndUpdate(productId, product);

  return res.json({
    ok: true,
    msg: "producto actualizado"
  });
});

export default route;
