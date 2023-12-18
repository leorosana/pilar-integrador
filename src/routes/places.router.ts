import { Router} from 'express';
import { getPlacesController } from '../controller/getPlaces.controller';
import { getPlaceByIdController } from '../controller/getPlaceById.controller';
import { createPlaceController } from '../controller/createPlace.controller';

export const router = Router();

//basepath --> /places

router.get('/', getPlacesController)
router.get('/:id', getPlaceByIdController)
router.post('/', createPlaceController)