import express from 'express';
const router = express.Router();


router.get("/locus/evidences", (req, res) => {
    res.json({
        evidences: [
            "Sequence-based prediction",
            "Gene expression correlated with compound production",
            "Knock-out studies",
            "Enzymatic assays",
            "Heterologous expression",
        ],
    })
    return;
});

export default router;