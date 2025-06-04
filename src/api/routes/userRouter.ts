import { Router, Request, Response } from "express";
import { controllerUser } from "../../container";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Lista de usuários");
});

router.post("/",(req,res) =>controllerUser.getUSer(req, res));

export default router;