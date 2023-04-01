import { Router } from 'express';

import * as collectionCtrl from '../Controllers/collection.controller';
import * as videoGameCtrl from '../Controllers/videoGame.controller';

import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const router = Router();

// COLLECTIONS
router.get('/', collectionCtrl.getCollections);
// router.post('/collection', collectionCtrl.addCollection);
router.post("/collection", upload.single("image"), collectionCtrl.addCollection);
// router.get('/greater', collectionCtrl.getCollectionsGreaterThan);
router.get('/collection/:id', collectionCtrl.findOneCollection);
router.delete('/collection/:id', collectionCtrl.deleteCollection);
router.put('/collection/:id', collectionCtrl.updateCollection);

// VIDEOGAMES
router.get('/videoGames', videoGameCtrl.getVideoGames);
router.post('/videoGame', videoGameCtrl.addVideoGame);
export default router;