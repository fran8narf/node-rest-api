import { Router } from 'express';

import * as collectionCtrl from '../Controllers/collection.controller';
import * as videoGameCtrl from '../Controllers/videoGame.controller';

const router = Router();

// COLLECTIONS
router.get('/', collectionCtrl.getCollections);
router.post('/collection', collectionCtrl.addCollection);
// router.get('/greater', collectionCtrl.getCollectionsGreaterThan);
router.get('/collection/:id', collectionCtrl.findOneCollection);
router.delete('/collection/:id', collectionCtrl.deleteCollection);
router.put('/collection/:id', collectionCtrl.updateCollection);

// VIDEOGAMES
router.get('/videoGames', videoGameCtrl.getVideoGames);
router.post('/videoGame', videoGameCtrl.addVideoGame);
export default router;