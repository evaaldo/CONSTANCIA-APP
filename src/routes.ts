import { Router, Request, Response } from 'express'
import { UserController } from './controllers/UserController'
import { AuthController } from './controllers/AuthController'

export const router = Router()

const userController = new UserController()
const authController = new AuthController()

// Public Route

router.get('/', (request: Request, response: Response) => {return response.status(200).json({ message: "Server is running.." })})

// Authentication Route

router.post('/users/auth/:id', authController.getToken)

// User Routes

router.get('/users', userController.getAllUsers)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)
