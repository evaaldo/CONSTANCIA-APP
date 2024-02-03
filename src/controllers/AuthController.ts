import { Request, Response } from 'express'
import { AuthService } from '../services/AuthService'

const authService = new AuthService()

export class AuthController {

    async getToken(request: Request, response: Response) {

        const user = request.body

        const token = await authService.getToken(user.username, user.password)

        return response.status(200).json( token )

    }

}