import express from 'express';

import { publications } from '../data/index.js';

const router = express.Router();

router.get("/databases", (_, res) => {
    res.json({
        databases: publications.databases,
    });
    return;
});

export default router;