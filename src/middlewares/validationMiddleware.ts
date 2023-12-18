import { NextFunction, Request, Response } from "express";
import Joi from 'joi'

export function validatePlaceBody(req: Request, res: Response, next: NextFunction) {
    const {body} = req
    const schema = Joi.object({
        name: Joi.string().required(),
        address: Joi.object({
            lat: Joi.number().required(),
            long: Joi.number().required(),
            map: Joi.string().required(),
        }),
        description: Joi.string().required(),
        days_hours_open: Joi.string().required(),
        picture: Joi.string().required(),
    })

    const {error, value} = schema.validate(body)
    if(error) {
        return res.status(400).json({
            message: error.details[0].message
        })
    }

    next()

}