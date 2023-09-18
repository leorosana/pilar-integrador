import { Request, Response } from 'express';
import * as Joi from 'joi';

// Definir el esquema de validación Joi para los datos de la estrella
const starSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  type: Joi.string().required(),
  distancia: Joi.string().required(),
  mass: Joi.string().required(),
  radius: Joi.string().required(),
});

export async function createStarController(req: Request, res: Response) {
  const starData = req.body;

  const { error } = starSchema.validate(starData);

  if (error) {
    return res.status(400).json({
      error: 'BAD REQUEST',
      message: 'There are missing params for this request',
      details: error.details, 
    });
  }

  res.status(200).json({
    status: 'OK',
    message: 'Star data is valid',
  });
}