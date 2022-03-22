import express from 'express';

import { locus } from '../data/index.js';

const router = express.Router();

router.get("/completeness", (_, res) => {
    res.json({
        completeness: locus.completeness,
    });
    return;
});

router.get("/databases", (_, res) => {
    res.json({
        databases: locus.databases,
    });
    return;
});

router.get("/evidence", (_, res) => {
    res.json({
        evidence: locus.evidence
    });
    return;
});

export default router;