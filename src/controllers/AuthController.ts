import { Request, Response } from 'express'
import { AuthService } from '../services/AuthService'
import session from 'express-session'

declare module 'express-session' {
    interface Session {
        user?: any;
    }
}


const authService = new AuthService()

export class AuthController {

    async getToken(request: Request, response: Response) {

        const user = request.body

        const token = await authService.getToken(user.username, user.password)

        if(token !== null) {

            request.session.user = token

            console.log(`Sua sessão é: ${request.session.user}`)

            return response.status(200).json( token )

        } else {

            return response.status(404).json({ message: "Your credentials are incorrect!" })

        }

    }

}