import { Router, Request, Response } from 'express'
import { UserController } from './controllers/UserController'
import { AuthController } from './controllers/AuthController'
import { verifyAuth } from './middlewares/verifyAuth'
import { TaskController } from './controllers/TaskController'

export const router = Router()

const userController = new UserController()
const authController = new AuthController()
const taskController = new TaskController()

// Public Route

router.get('/', (request: Request, response: Response) => {return response.status(200).json({ message: "Server is running.." })})

// Authentication Route

router.post('/users/auth', authController.getToken)

// User Routes

router.get('/users', verifyAuth, userController.getAllUsers)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)

// Task Routes

router.get('/tasks', verifyAuth, taskController.getAllTasksByUser)
router.post('/tasks', verifyAuth, taskController.createTaskByUser)
router.put('/tasks', verifyAuth, taskController.updateTask)
router.delete('/tasks', verifyAuth, taskController.deleteTask)
