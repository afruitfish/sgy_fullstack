import { Request, Response, NextFunction } from 'express'

export const authGard = (request: Request, response: Response, next: NextFunction) => {
    console.log("hhhhh");

    next(new Error('UNAUTHORRIZED'));
}