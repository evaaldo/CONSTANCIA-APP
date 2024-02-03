import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

const userService = new UserService()

export class UserController {

    async getAllUsers(request: Request, response: Response) {

        const user = await userService.getAllUsers()

        return response.status(200).json({ user })

    }

    async createUser(request: Request, response: Response) {

        const user = request.body

        await userService.createUser(user.username, user.password)

        return response.status(201).json({ message: "User created!" })

    }

    async updateUser(request: Request, response: Response) {

        const user = request.body
        const userId = request.params.id

        await userService.updateUser(userId, user.username, user.password)

        return response.status(204).json({ message: "User updated!" })

    }

    async deleteUser(request: Request, response: Response) {

        const userId = request.params.id

        await userService.deleteUser(userId)

        return response.status(204).json({ message: "User deleted!" })

    }

}