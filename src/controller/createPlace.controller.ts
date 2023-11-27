import { Request, Response } from 'express';
import * as Joi from 'joi';

// Definir el esquema de validación Joi para los datos de la estrella
const placeSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  latitude: Joi.number().required(),
  length: Joi.number().required(),
  link: Joi.string().required(),
  description: Joi.string().required(),
  timetable: Joi.string().required(),
});

export async function createPlaceController(req: Request, res: Response) {
  const placeData = req.body;

  const { error } = placeSchema.validate(placeData);

  if (error) {
    return res.status(400).json({
      error: 'BAD REQUEST',
      message: 'There are missing params for this request',
      details: error.details, 
    });
  }

  res.status(200).json({
    status: 'OK',
    message: 'Place data is valid',
  });
}