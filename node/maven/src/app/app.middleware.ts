import { Request, Response, NextFunction } from 'express';
export const defaultErrorHandler = (
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    if (error.message) {
        console.log(error.message, '++++++')
    }
    let statusCode: number, message: string;
    /**
     * 处理异常
     */
    switch (error.message) {
        case 'NAME_IS_REQUIRED':
            statusCode = 400;
            message = '请提供用户名';
            break;
        case 'PASSWORD_IS_REQUIRED':
            statusCode = 400;
            message = '请提供密码';
            break;
        case 'USER_ALREAD_EXSIT':
            statusCode = 409;
            message = '用户名重复';
            break;
        case 'USER_DOSE_NOT_EXSI':
            statusCode = 400;
            message = '用户名不存在';
            break;
        case 'UNAUTHORIZED':
            statusCode = 401;
            message = "请先登录";
            break;
        case 'USER_DOES_NOT_OWN_RESOURCE':
            statusCode = 403;
            message = '禁止访问';
            break;
        case 'NOT_FOUND':
            statusCode = 404
            message = "没找到"
        default:
            statusCode = 500
            message = "麻了"
    }
    response.status(statusCode).send({ message })
}
