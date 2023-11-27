import placeData from '../data/place.json';
import {Request, Response} from 'express';

export async function getPlacesController(req: Request, res: Response) {
    const name = req.query.name as string
    let places = placeData
    if (name){
        places = placeData.filter((place) => place.name.includes(name))
    }          
    res.status(200).json(places)     
}