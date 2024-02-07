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
exports.TaskService = void 0;
const db_1 = require("../database/db");
class TaskService {
    getAllTasksByUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield (0, db_1.sql) `SELECT * FROM tasks WHERE username=${username}`;
            return tasks;
        });
    }
    createTaskByUser(username, taskname, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskId = crypto.randomUUID();
            yield (0, db_1.sql) `INSERT INTO tasks (taskId, taskname, description, username) VALUES (${taskId}, ${taskname}, ${description}, ${username})`;
        });
    }
    deleteTask(taskname) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, db_1.sql) `DELETE FROM tasks WHERE taskname=${taskname}`;
        });
    }
    updateTask(taskname, newTaskname, description) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, db_1.sql) `UPDATE tasks SET taskname=${newTaskname}, description=${description} WHERE taskname=${taskname}`;
        });
    }
}
exports.TaskService = TaskService;
