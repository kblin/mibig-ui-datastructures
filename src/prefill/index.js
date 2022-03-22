import express from 'express';

import { biosynthetic_classes, compound, locus, publications } from '../data/index.js';
import { select_from, select_up_to_from, get_positive_value_below, random_string } from '../utils.js';

const router = express.Router();

function get_random_compounds(max) {
    const count = get_positive_value_below(max + 1);
    let compounds = [];
    for (let i = 0; i < count; i++) {
        let new_compound = {
            activities: select_up_to_from(compound.activities, max),
            name: select_from(compound.fake_names),
            synonyms: select_up_to_from(compound.fake_names, max),
            database_ids: [
                {
                    database: select_from(compound.databases),
                    identifier: random_string(12),
                }
            ],
            evidence: select_up_to_from(compound.evidence, max),
        };
        compounds.push(new_compound);
    }
    return compounds;
};

router.get('/new/:acc', (req, res) => {
    const acc = req.params.acc;

    let basic_data = {
        accession: acc,
        biosynthetic_classes: select_up_to_from(biosynthetic_classes, 3, true),
        compounds: get_random_compounds(2),
        locus: {
            accession: {
                database: select_from(locus.databases),
                identifier: random_string(12),
            },
            completeness: select_from(locus.completeness),
            evidence: select_up_to_from(locus.evidence, 3, true),
            mixs_compliant: false,
        },
        ncbi_taxid: 123456,
        organism_name: "Examplomyces sample",
        publications: [
            {
                database: select_from(publications.databases),
                identifier: random_string(12),
            }
        ]
    }

    res.json(basic_data);
    return;
});

export default router;