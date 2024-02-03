import { sql } from '../database/db'

export class UserService {

    async getAllUsers() {
        
        const users = await sql`SELECT * FROM users`

        return users

    }

    async createUser(username: string, password: string) {

        const userId = crypto.randomUUID()

        await sql`INSERT INTO users (userId, username, password) VALUES (${userId},${username},${password})`

    }

    async updateUser(userId: string, username: string, password: string) {

        await sql`UPDATE users SET username=${username}, password=${password} WHERE userId=${userId}`

    }

    async deleteUser(userId: string) {

        await sql`DELETE FROM users WHERE userId=${userId}`

    }

}