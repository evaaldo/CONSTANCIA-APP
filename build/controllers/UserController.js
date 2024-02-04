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
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
const userService = new UserService_1.UserService();
class UserController {
    getAllUsers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield userService.getAllUsers();
            return response.status(200).json({ users });
        });
    }
    createUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = request.body;
            yield userService.createUser(user.username, user.password);
            return response.status(201).json({ message: "User created!" });
        });
    }
    updateUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = request.body;
            const userId = request.params.id;
            yield userService.updateUser(userId, user.username, user.password);
            return response.status(200).json({ message: "User updated!" });
        });
    }
    deleteUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = request.params.id;
            yield userService.deleteUser(userId);
            return response.status(200).json({ message: "User deleted!" });
        });
    }
}
exports.UserController = UserController;
