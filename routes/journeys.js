const express = require('express');

const router = express.Router();
const Journeys = require('../models/Journeys');

router.get('/', async (req, res, next) => {
  try {
    const journeys = await Journeys.find();
    return res.json({
      status: 200,
      journeys,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:journeyId', async (req, res, next) => {
  try {
    const { journeyId } = req.params;
    const journey = await Journeys.findById(journeyId);
    return res.json({
      status: 200,
      journey,
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const { latitude, longitude, journeyDate } = req.body;

  try {
    const journey = await Journeys.create({
      longitude,
      latitude,
      journeyDate,
    });
    return res.json({
      status: 200,
      journey,
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:journeyId', async (req, res, next) => {
  try {
    const { journeyId } = req.params;
    const { latitude, longitude } = req.body;
    const journey = await Journeys.findByIdAndUpdate(journeyId, {
      longitude,
      latitude,
    });
    return res.json({
      status: 200,
      journey,
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:journeyId', async (req, res, next) => {
  try {
    const { journeyId } = req.params;
    const journey = await Journeys.findByIdAndDelete(journeyId);
    return res.json({
      status: 200,
      journey,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
