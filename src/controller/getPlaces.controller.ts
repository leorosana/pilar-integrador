import placeData from '../data/place.json';
import {NextFunction, Request, Response} from 'express';
import { getPlaces } from '../services/place.service';

export async function getPlacesController(req: Request, res: Response, next: NextFunction) {
    try{
        const name = req.query.name as string | undefined
        const places = await getPlaces(name)
        res.status(200).json(places)            
      }
      catch (error){
        next(error)
      }         
}