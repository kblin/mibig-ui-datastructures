import express from 'express';

import { compound } from '../data/index.js';

const router = express.Router();

router.post('/activities', (req, res) => {
    const activities = req.body.activities;
    if (validate_activities(activities, res)) {
        success(res);
    }
});

router.post('/moieties', (req, res) => {
    const moieties = req.body.moieties;
    if (validate_moieties(moieties, res)){
        success(res);
    }
});

router.post('/', (req, res) => {
    const compound = req.body.compound;
    if (!check_provided(compound, res)) {
        return;
    }
    if (!validate_activities(compound.activities, res)) {
        return;
    }
    if (!validate_moieties(compound.moieties, res)){
        return;
    }

});

function check_provided(item, res) {
    if (!item) {
        res.status = 400;
        let error = {
            status: 400,
            text: "Invalid input."
        };
        res.json(error);
        return false;
    }
    return true;
}

function validate_activities(activities, res) {
    if (!check_provided(activities, res)) {
        return false;
    }
    let invalid_activities = [];
    for (let activity of activities) {
        if (!compound.activities.includes(activity.toLowerCase())) {
            invalid_activities.push(activity);
        }
    }

    if (invalid_activities.length > 0) {
        res.status(400);
        let error = {
            status: 400,
            text: `Invalid activity values: ${invalid_activities}. Valid values are ${compound.activities}.`,
            invalid: invalid_activities,
            allowed: compound.activities,
        }
        res.json(error);
        return false;
    }
    return true;
}

function success(res) {
    res.json({ status: 220, text: 'Ok' });
}

function validate_moieties(moieties, res) {
    if (!check_provided(moieties, res)) {
        return false;
    }
    let invalid_moieties = [];
    for (let moiety of moieties) {
        if (!moiety.name) {
            invalid_moieties.push(moiety);
        }
    }

    if (invalid_moieties.length > 0) {
        res.status = 400
        let error = {
            status: 400,
            text: "Found invalid moieties, moieties need a name.",
            invalid: invalid_moieties,
        };
        res.json(error);
        return false;
    }
    return true;
}

export default router;