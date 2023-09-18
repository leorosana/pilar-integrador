import starData from '../data/star.json';
import {Request, Response} from 'express';

export async function getStarsController(req: Request, res: Response) {
    const age = req.query.age as string
    let stars = starData
    if (age){
        stars = starData.filter((star) => star.age.includes(age))
    }          
    res.status(200).json(stars)     
}