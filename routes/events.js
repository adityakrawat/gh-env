import e, { Router } from "express";

import db from '../data/database.js';

const router = Router();

router.get('/', async (req, res) => {
    const allEvents = await db.collection('events').find().toArray();
    res.json({events: allEvents});
    });
    
router.post('/', async (req, res) => {
    const newEvent = req.body;
    const result = await db.collection('events').insertOne({...newEvent});
    res.status(201).json({message: 'Event created', eventId: {...newEvent, id: result.insertedId}});
});

export default router;