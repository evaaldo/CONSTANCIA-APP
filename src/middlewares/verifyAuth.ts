import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function verifyAuth(request: Request, response: Response, next: NextFunction) {

    const authToken = request.headers.authorization

    if(authToken) {

        const token = authToken.split(' ')[1]

        try {

            verify(token, 'livinhalinda')

            return next()

        } catch(error) {

            return response.status(401).json({ message: "Unauthorized" })

        }

    }

    return response.status(401).json({ message: "Unauthorized" })

}