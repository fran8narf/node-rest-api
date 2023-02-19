import { Router } from 'express';

import * as collectionCtrl from '../Controllers/collection.controller';
import * as videoGameCtrl from '../Controllers/videoGame.controller';

const router = Router();

// COLLECTIONS
router.get('/', collectionCtrl.getCollections);
router.post('/', collectionCtrl.addCollection);
router.get('/:id', collectionCtrl.findOneCollection);
router.delete('/:id', collectionCtrl.deleteCollection);

// VIDEOGAMES
router.get('/videoGames', videoGameCtrl.getVideoGames);
router.post('/videoGame', videoGameCtrl.addVideoGame);
export default router;