"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const TaskService_1 = require("../services/TaskService");
const taskService = new TaskService_1.TaskService();
class TaskController {
    getAllTasksByUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const username = request.session.user;
            const tasks = yield taskService.getAllTasksByUser(username);
            try {
                return response.status(200).json(tasks);
            }
            catch (error) {
                return error;
            }
        });
    }
    createTaskByUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = request.body;
            const username = request.session.user;
            console.log(username);
            yield taskService.createTaskByUser(username, task.taskname, task.description);
            try {
                return response.status(201).json({ message: "Your task was created!" });
            }
            catch (error) {
                return error;
            }
        });
    }
    deleteTask(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = request.body;
            yield taskService.deleteTask(task.taskname);
            try {
                return response.status(200).json({ message: "Task deleted!" });
            }
            catch (error) {
                return error;
            }
        });
    }
    updateTask(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = request.body;
            yield taskService.updateTask(task.taskname, task.newTaskname, task.description);
            try {
                return response.status(200).json({ message: "Task updated!" });
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.TaskController = TaskController;
