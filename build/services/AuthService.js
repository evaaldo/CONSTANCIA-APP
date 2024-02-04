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
exports.AuthService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const db_1 = require("../database/db");
class AuthService {
    getToken(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = {
                username,
                password
            };
            const tokenKey = 'livinhalinda';
            const userDb = yield (0, db_1.sql) `SELECT * FROM users WHERE username=${username} AND password=${password}`;
            if (!userDb || userDb.length === 0) {
                return null;
            }
            else {
                const token = (0, jsonwebtoken_1.sign)(tokenData, tokenKey);
                return token;
            }
        });
    }
}
exports.AuthService = AuthService;
