"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const user_service_1 = require("./user.service");
const store = async (request, response, next) => {
    console.log(request.body, '/////////////');
    const { name, password } = request.body;
    try {
        const data = await user_service_1.createUser({ name, password });
        response.status(201).send('保存成功');
    }
    catch (error) {
        next(Error);
    }
};
exports.store = store;
//# sourceMappingURL=user.controller.js.map