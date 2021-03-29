"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.validateUserData = void 0;
const user_service_1 = require("./user.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const validateUserData = async (request, responce, next) => {
    console.log('验证用户数据');
    const { name, password } = request.body;
    console.log(name, "  ", password);
    if (!name) {
        next(new Error('NAME_IS_REQUIRED'));
    }
    else if (!password) {
        next(new Error('PASSWORD_IS_REQUIRED'));
    }
    const user = await user_service_1.getUserByName(name);
    if (user) {
        console.log("233");
        next(new Error('USER_ALREAD_EXSIT'));
    }
    else {
        next();
    }
};
exports.validateUserData = validateUserData;
const hashPassword = async (request, response, next) => {
    const { password } = request.body;
    request.body.password = await bcrypt_1.default.hash(password, 10);
    next();
};
exports.hashPassword = hashPassword;
//# sourceMappingURL=user.middleware.js.map