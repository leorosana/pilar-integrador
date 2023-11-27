import placeData from '../data/place.json';
import {Request, Response} from 'express';

export async function getPlaceByIdController(req: Request, res: Response) {    
    const id = parseInt(req.params.id)
    const place = placeData.find((place) => place.id === id)
    if (!place){
        res.status(404).json({
            error: 'PLACE_NOT_FOUND',
            message: `Place ${id} not found in the database`
        })
    }
    res.status(200).json(place)
}