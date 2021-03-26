"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGard = void 0;
const authGard = (request, response, next) => {
    console.log("hhhhh");
    next(new Error('UNAUTHORRIZED'));
};
exports.authGard = authGard;
//# sourceMappingURL=auth.middleware.js.map