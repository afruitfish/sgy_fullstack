import { Request, Response, NextFunction } from 'express'; // @types/express
import { createUser } from './user.service';
export const store = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.log(request.body, '/////////////');
    const { name, password } = request.body
    // 存  -> 数据存储服务service
    try {
        const data = await createUser({ name, password })
        response.status(201).send('保存成功')
    } catch (error) {
        next(Error)
    }
}
