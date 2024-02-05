import { Request, Response } from 'express'
import { TaskService } from '../services/TaskService'

    const taskService = new TaskService()

export class TaskController {

    async getAllTasksByUser(request: Request, response: Response) {

        const userId = request.params.id

        const tasks = await taskService.getAllTasksByUser(userId)

        return response.status(200).json(tasks)

    }

}
