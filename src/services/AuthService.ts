import { sign } from 'jsonwebtoken'
import { sql } from '../database/db'

export class AuthService {

    async getToken(username: string, password: string) {

        const tokenData = {
            username,
            password
        }

        const tokenKey = 'livinhalinda'

        const userDb = await sql`SELECT * FROM users WHERE username=${username} AND password=${password}`

        if(!userDb || userDb.length === 0) {
            return null
        } else {

            const token = sign(tokenData,tokenKey)

            return token

        }

    }

}