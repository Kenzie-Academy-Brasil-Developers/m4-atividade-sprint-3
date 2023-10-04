import { Request, Response } from "express";
import { UsersServices } from "../services/users.services";

export class UsersControllers{
    registerUser(req: Request, res: Response){
        const { name, email } = req.body;

       const usersServices = new UsersServices();
       
       const response = usersServices.registerUser(name, email);

       return res.status(201).json(response);
    }
}