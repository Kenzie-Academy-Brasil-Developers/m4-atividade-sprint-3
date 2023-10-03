import { Request, Response } from "express";
import { generateId, usersDatabase } from "../database/database";

export class UsersControllers{
    registerUser(req: Request, res: Response){
        const { name, email } = req.body;

        const newUser = { id: generateId(), name, email};

        usersDatabase.push(newUser);

        return res.status(201).json({ user: newUser, message: "Usuário cadastrado com sucesso."})
    }
}