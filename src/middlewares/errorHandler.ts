import { NextFunction, Request, Response } from "express";
import { httpErrors } from '../constants/errors';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    const code = err.message
    const error = httpErrors[code as keyof typeof httpErrors] || httpErrors.InternalServerError
    return res.status(error.status).json(error)
}