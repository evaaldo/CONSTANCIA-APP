"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const UserController_1 = require("./controllers/UserController");
const AuthController_1 = require("./controllers/AuthController");
exports.router = (0, express_1.Router)();
const userController = new UserController_1.UserController();
const authController = new AuthController_1.AuthController();
// Public Route
exports.router.get('/', (request, response) => { return response.status(200).json({ message: "Server is running.." }); });
// Authentication Route
exports.router.post('/users/auth/:id', authController.getToken);
// User Routes
exports.router.get('/users', userController.getAllUsers);
exports.router.post('/users', userController.createUser);
exports.router.put('/users/:id', userController.updateUser);
exports.router.delete('/users/:id', userController.deleteUser);
