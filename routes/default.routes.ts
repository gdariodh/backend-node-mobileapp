import { Router, Response, Request } from "express";

const defaultRoutes = Router()

defaultRoutes.get('/', (req:Request, res: Response) => {
  return res.json({
    message: 'holiixddd'
  })
})

export default defaultRoutes;