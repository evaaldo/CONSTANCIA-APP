import { Router, Request, Response } from 'express'
import { UserController } from './controllers/UserController'

export const router = Router()
const userController = new UserController()

// Public Route

router.get('/', (request: Request, response: Response) => {return response.status(200).json({ message: "Server is running.." })})

// User Routes

router.get('/users', userController.getAllUsers)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)
