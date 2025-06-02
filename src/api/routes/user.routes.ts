import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Lista de usuários");
});

router.post("/", (req: Request, res: Response) => {
  res.status(201).send("Usuário criado");
});

export default router;