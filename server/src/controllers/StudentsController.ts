import { Request, Response } from 'express'
import db from '../database/connection';
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default class StudentsController {
    async login(req: Request, res: Response) {
        const { email, password } = req.body
        const user = await db('students').where({
            email: email
        })

        if (user.length === 1) {
            if (await bcrypt.compare(password, user[0].password)) {
                const token = jwt.sign({ id: user[0].id }, process.env.APP_SECRET, {
                    expiresIn: '1d'
                })

                const data = {
                    id: user[0].id,
                    name: user[0].name,
                    email: user[0].email,
                    token
                }

                return res.json(data)
            } else {
                return res.status(404).json({ message: 'User not found' })
            }
        } else {
            return res.status(404).json({ message: 'User not found' })
        }
    }

    async index(req: Request, res: Response) {
        const user = await db('students').select();

        return res.json(user);
    }
    async create(req: Request, res: Response) {
        const { name, email, lastname, password } = req.body;

        const user = await db('students').where({
            email: email
        })

        if (user.length === 1) {
            return res.status(401).send({ message: 'Já existe um usuario com esse email' })
        }

        const passwordHash = await bcrypt.hash(password, 8)

        await db('students').insert({
            name,
            email,
            lastname,
            password: passwordHash
        })

        return res.status(201).send();
    }
}