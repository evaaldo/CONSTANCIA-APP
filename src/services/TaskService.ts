import { sql } from "../database/db";

export class TaskService {

    async getAllTasksByUser(username: string) {

        const tasks = await sql`SELECT * FROM tasks WHERE username=${username}`

        return tasks

    }

    async createTaskByUser(username: string, taskname: string, description: string) {

        const taskId = crypto.randomUUID()

        await sql`INSERT INTO tasks (taskId, taskname, description, username) VALUES (${taskId}, ${taskname}, ${description}, ${username})`

    }

}