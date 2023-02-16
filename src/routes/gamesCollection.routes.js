import { Router } from 'express';

import * as collectionCtrl from '../Controllers/collection.controller';

const router = Router();

router.get('/', collectionCtrl.getCollections);

router.post('/', collectionCtrl.addCollection);

export default router;