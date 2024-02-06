"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const UserController_1 = require("./controllers/UserController");
const AuthController_1 = require("./controllers/AuthController");
const verifyAuth_1 = require("./middlewares/verifyAuth");
const TaskController_1 = require("./controllers/TaskController");
exports.router = (0, express_1.Router)();
const userController = new UserController_1.UserController();
const authController = new AuthController_1.AuthController();
const taskController = new TaskController_1.TaskController();
// Public Route
exports.router.get('/', (request, response) => { return response.status(200).json({ message: "Server is running.." }); });
// Authentication Route
exports.router.post('/users/auth', authController.getToken);
// User Routes
exports.router.get('/users', verifyAuth_1.verifyAuth, userController.getAllUsers);
exports.router.post('/users', userController.createUser);
exports.router.put('/users/:id', userController.updateUser);
exports.router.delete('/users/:id', userController.deleteUser);
// Task Routes
exports.router.get('/tasks', verifyAuth_1.verifyAuth, taskController.getAllTasksByUser);
exports.router.post('/tasks', verifyAuth_1.verifyAuth, taskController.createTaskByUser);
