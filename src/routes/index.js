import { Router } from 'express';
const router = Router();

router.get('/collection', (req, res) => {
  res.send('COLLECTION');
});

export default router;