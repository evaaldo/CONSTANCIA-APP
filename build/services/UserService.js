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
exports.UserService = void 0;
const db_1 = require("../database/db");
class UserService {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield (0, db_1.sql) `SELECT * FROM users`;
            return users;
        });
    }
    createUser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = crypto.randomUUID();
            yield (0, db_1.sql) `INSERT INTO users (userId, username, password) VALUES (${userId},${username},${password})`;
        });
    }
    updateUser(userId, username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, db_1.sql) `UPDATE users SET username=${username}, password=${password} WHERE userId=${userId}`;
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, db_1.sql) `DELETE FROM users WHERE userId=${userId}`;
        });
    }
}
exports.UserService = UserService;
