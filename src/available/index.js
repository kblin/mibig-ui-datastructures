import express from 'express';

import { biosynthetic_classes } from '../data/index.js';
import compound from './compound.js';
import locus from './locus.js';
import publication from './publication.js';

const router = express.Router();


router.get("/biosynthetic_class", (_, res) => {
    res.json({
        biosynthetic_classes: biosynthetic_classes,
    });
    return;
});

router.use("/compound", compound);
router.use("/locus", locus);
router.use("/publication", publication);

export default router;