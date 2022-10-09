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
    msg: "producto actualizado gg",
  });
});

route.delete("/", async (req: Request, res: Response) => {
  const productId = req.query.id;

  if (!productId) {
    return res.json({
      ok: false,
      msg: "no existe id",
    });
  }

  const productDb = await Product.findById(productId);

  if (!productDb) {
    return res.json({
      ok: false,
      msg: "no existe un producto con ese id",
    });
  }

  const productDeleted = await Product.findByIdAndDelete(productId);

  return res.json({
    ok: true,
    msg: "Delete ok",
    productDeleted,
  });
});

route.get("/paging", async (req: Request, res: Response) => {
  let perPage = 5;
  let page = Number(req.query.page) || 1;
  let skip = page - 1;
  skip = skip * perPage;

  const products = await Product.find().skip(skip).limit(perPage);

  return res.json({
    ok: true,
    msg: "Ok paging",
    products,
  });
});

export default route;
