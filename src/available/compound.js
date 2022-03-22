import express from 'express';

import { compound } from '../data/index.js';

const router = express.Router();

router.get("/activities", (_, res) => {
    res.json({
        activities: compound.activities,
    });
    return;
});

router.get("/databases", (_, res) => {
    res.json({
        databases: compound.databases,
    });
    return;
});

router.get("/evidence", (_, res) => {
    res.json({
        evidence: compound.evidence
    });
    return;
});

export default router;