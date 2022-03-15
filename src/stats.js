import express from 'express';
const router = express.Router();

router.get("/", (req, res) =>{
    let stats = {
        counts: {
            total: 6,
            minimal: 3,
            complete: 2,
            incomplete: 1,
        },
        clusters: [{
            type: "NRP",
            description: "Non-ribosomal peptide",
            count: 3,
            class: "nrps",
        },{
            type: "PKS",
            description: "Polyketide",
            count: 2,
            class: "pks",
        },{
            type: "RiPP",
            description: "Ribosomally synthesized and post-translationally modified peptide",
            count: 1,
            class: "ripp",
        }],
        taxon_stats: [{
            genus: "Streptomyces",
            count: 3,
        },{
            genus: "Amycolatopsis",
            count: 3,
        }],
    };

    res.json(stats);
})

export default router;