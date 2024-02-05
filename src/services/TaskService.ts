import { sql } from "../database/db";

export class TaskService {

    async getAllTasksByUser(userId: string) {

        const tasks = await sql`SELECT * FROM tasks WHERE userId=${userId}`

        return tasks

    }

}