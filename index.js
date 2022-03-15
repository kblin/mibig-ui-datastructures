import express from 'express';
import body_parser from 'body-parser';
import cors from 'cors';


import available from './src/available/index.js';
import stats from './src/stats.js';
import validate from './src/validate/index.js';

const app = express();
const port = 6424;

app.use(cors());

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

app.use('/api/v1/available', available);
app.use('/api/v1/stats', stats);
app.use('/api/v1/validate', validate);

app.get('/api/v1/prefill/:acc', (req, res)=> {
    const acc = req.params.acc;

    let basic_data = {
        accession: acc,
        compounds: [
            {name: "Examplomycin",},
        ],
        locus: {
            accession: {
                database: "NCBI",
                identifier: "AB_012345.1"
            },
            completeness: "complete",
            evidences: ["Sequence-based prediction"],
            mixs_compliant: false,
        },
        organism_name: "Examplomyces sample",
        ncbi_taxid: 123456,
    }

    res.json(basic_data);
    return;
});



app.listen(port, () => console.log(`Mock MIBiG API server running on port ${port}!`));