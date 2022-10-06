import { Router, Response, Request } from "express";
import { Product } from "../models/product.model";

const route = Router()

route.get('/', (req:Request, res: Response) => {
  return res.json({
    product: 'zapatillas',
    msj :"OK GET PRODUCT"
  })
})


route.post('/', (req:Request, res: Response) => {

  const body = req.body;

  console.log(body)

  const product = {
    name: body.name,
    description: body.description,
    image: body.image,
    price: body.price
  }

  Product.create(product).then(productDb => {
    return res.json({
      product: 'zapatillas',
      productDb
    })
  }).catch(err => {
    return res.json({
     msg: 'Creacion de producto erronea!'
    })
  })


})

export default route;