import { Request, Response } from 'express'
import { TaskService } from '../services/TaskService'

const taskService = new TaskService()

export class TaskController {

    async getAllTasksByUser(request: Request, response: Response) {

        const username = request.session.user

        const tasks = await taskService.getAllTasksByUser(username)

        try {

            return response.status(200).json(tasks)

        } catch(error) {

            return error

        }

    }

    async createTaskByUser(request: Request, response: Response) {

        const task = request.body
        const username = request.session.user

        console.log(username)

        await taskService.createTaskByUser(username, task.taskname, task.description)

        try {

            return response.status(201).json({ message: "Your task was created!" })

        } catch(error) {

            return error

        }

    }

    async deleteTask(request: Request, response: Response) {

        const task = request.body

        await taskService.deleteTask(task.taskname)

        try {

            return response.status(200).json({ message: "Task deleted!" })

        } catch(error) {

            return error

        }

    }

    async updateTask(request: Request, response: Response) {

        const task = request.body

        try {

            return response.status(200).json({ message: "Task updated!" })

        } catch(error) {

            return error

        }

    }

}
