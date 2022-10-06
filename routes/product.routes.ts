import { Router, Response, Request } from "express";

const route = Router()

route.get('/', (req:Request, res: Response) => {
  return res.json({
    product: 'zapatillas'
  })
})

export default route;