import { Router} from 'express';
import { getPlacesController } from '../controller/getPlaces.controller';
import { getPlaceByIdController } from '../controller/getPlacesById.controller';
import { createPlaceController } from '../controller/createPlace.controller';

export const router = Router();

//basepath --> /stars

router.get('/', getPlacesController)
router.get('/:id', getPlaceByIdController)
router.post('/', createPlaceController)