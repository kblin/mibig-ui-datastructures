import express from 'express';
import body_parser from 'body-parser';
import cors from 'cors';


import available from './src/available/index.js';
import stats from './src/stats.js';
import prefill from './src/prefill/index.js';
import validate from './src/validate/index.js';

const app = express();
const port = 6424;

app.use(cors());

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

app.use('/api/v1/available', available);
app.use('/api/v1/stats', stats);
app.use('/api/v1/prefill', prefill);
app.use('/api/v1/validate', validate);

app.listen(port, () => console.log(`Mock MIBiG API server running on port ${port}!`));