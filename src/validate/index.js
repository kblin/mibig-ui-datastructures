import express from 'express';
import compound from './compound.js';

const router = express.Router();

router.use('/compound', compound);

export default router;