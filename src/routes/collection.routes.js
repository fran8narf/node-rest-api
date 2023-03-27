import { Router } from 'express';

import * as collectionCtrl from '../Controllers/collection.controller';
import * as videoGameCtrl from '../Controllers/videoGame.controller';

import multer from "multer";
import sharp from "sharp";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: {
    _handleFile: async (req, file, cb) => {
      try {
        const outputPath = path.join("uploads", `${Date.now()}-${file.originalname}`);

        await sharp(file.stream)
          .resize({ width: 800, height: 800, fit: "inside" }) // Ajusta el tamaño de la imagen según tus necesidades
          .jpeg({ quality: 80 }) // Ajusta la calidad según tus necesidades
          .toFile(outputPath);

        cb(null, {
          path: outputPath,
          filename: path.basename(outputPath),
        });
      } catch (err) {
        cb(err);
      }
    },
    _removeFile: (req, file, cb) => {
      // Aquí puedes implementar la lógica para eliminar archivos si es necesario
    },
  },
});

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