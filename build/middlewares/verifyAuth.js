"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAuth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function verifyAuth(request, response, next) {
    const authToken = request.headers.authorization;
    if (authToken) {
        const token = authToken.split(' ')[1];
        try {
            (0, jsonwebtoken_1.verify)(token, 'livinhalinda');
            return next();
        }
        catch (error) {
            return response.status(401).json({ message: "Unauthorized" });
        }
    }
    return response.status(401).json({ message: "Unauthorized" });
}
exports.verifyAuth = verifyAuth;
