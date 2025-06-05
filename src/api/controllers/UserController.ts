import {  Request, Response } from "express";
import { UserServices } from "../../application/services/UserServices";


export class userController {

constructor(private service: UserServices) {}

  async getUSer(req:Request,res: Response){
  const {name,email} = req.body;
    
    try {
       const result = await this.service.findByEmail(email);
       return res.status(201).json(result); 

    } catch (error:any) {

         return res.status(400).json({ error: error.message });
    }
  }
}