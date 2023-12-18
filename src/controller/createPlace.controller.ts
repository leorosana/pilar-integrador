import { NextFunction, Request, Response } from 'express';
import { IPlace } from '../interfaces/IPlace';
import { createPlace } from '../services/place.service';
import { Place } from '../models/Place.model';

export async function  createPlaceController(req:Request, res:Response, next:NextFunction) {
  try{
    const { name, address, description, days_hours_open, picture } = req.body
    
    const { lat, long, map } = address || {};

    const placeData: IPlace = {
      name,
      address: { lat, long, map },
      description,
      days_hours_open,
      picture,
    };
        
    const response = await createPlace(placeData)

    res.status(200).json(response)
    
  }
  catch (error){
    next(error)
  }
}