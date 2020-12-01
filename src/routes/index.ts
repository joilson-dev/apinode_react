import express, { Request,  Response, NextFunction } from "express";

const routes = express.Router();

routes.get('/', (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "Agora vai!" })
})

export default routes;