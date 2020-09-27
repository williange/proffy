import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'

declare var process: {
    env: {
        APP_SECRET: string
    }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ message: 'Token is required!' })
    }

    //Bearer asdasdasd+8q49wd84q9w8d4asd (tira o Bearer)
    const [, token] = authHeader.split(' ')

    try {
        jwt.verify(token, process.env.APP_SECRET);
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Token invalid!' })
    }
}