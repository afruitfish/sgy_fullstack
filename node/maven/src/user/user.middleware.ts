import { Request, Response, NextFunction } from 'express';
import { getUserByName } from './user.service';
import bcrypt from 'bcrypt';

export const validateUserData = async (
    request: Request,
    responce: Response,
    next: NextFunction
) => {
    /**
     * 验证用户数据
     */
    // 1. 验证数据是否合法
    // 1.1 用户名
    // 1.2 密码
    // 1.3 重名
    console.log('验证用户数据');
    const { name, password } = request.body
    console.log(name, "  ", password);
    if (!name) {
        next(new Error('NAME_IS_REQUIRED'))
    } else if (!password) {
        next(new Error('PASSWORD_IS_REQUIRED'))
    }
    const user = await getUserByName(name);
    if (user) {
        console.log("233")
        next(new Error('USER_ALREAD_EXSIT'))
    }
    else {
        next();
    }
}
export const hashPassword = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { password } = request.body;
    request.body.password = await bcrypt.hash(password, 10);
    next();
}