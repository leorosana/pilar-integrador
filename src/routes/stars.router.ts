import { Router} from 'express';
import { getStarsController } from '../controller/getStars.controller';
import { getStarByIdController } from '../controller/getStarsById.controller';
import { createStarController } from '../controller/createStar.controller';

export const router = Router();

//basepath --> /stars

router.get('/', getStarsController)
router.get('/:id', getStarByIdController)
router.post('/', createStarController)