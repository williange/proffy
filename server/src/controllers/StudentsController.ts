import { Request, Response } from 'express'
import db from '../database/connection';
import * as bcrypt from 'bcrypt'

export default class StudentsController {
    async index(req: Request, res: Response) {
        const user = await db('students').select()

        return res.json(user);
    }
    async create(req: Request, res: Response) {
        const { name, email, lastname, password } = req.body;

        const passwordHash = await bcrypt.hash(password, 8)

        const students = await db('students').insert({
            name,
            email,
            lastname,
            password: passwordHash
        })

        return res.status(201).send();
    }
}