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

    }

    async deleteUser(userId: string) {

    }

}