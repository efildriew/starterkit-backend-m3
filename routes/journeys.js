const express = require("express");

const router = express.Router();
const Journeys = require("../models/Journeys");

router.get("/", async (req, res, next) => {
  try {
    const journeys = await Journeys.find();
    return res.json({
      status: 200,
      journeys
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:journeyId", async (req, res, next) => {
  try {
    const { journeyId } = req.params;
    const journey = await Journeys.findById(journeyId);
    return res.json({
      status: 200,
      journey
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const journey = req.body;
  console.log(req.body);
  try {
    const newJourney = await Journeys.create({
      startLocation: {
        coordinates: [
          journey.originCoordinates[1],
          journey.originCoordinates[0]
        ],
        name: journey.originName
      },
      endLocation: {
        coordinates: [
          journey.destinationCoordinates[1],
          journey.destinationCoordinates[0]
        ],
        name: journey.destinationName
      },
      time: journey.time
    });
    console.log(newJourney);
    return res.json({
      status: 200,
      newJourney
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:journeyId", async (req, res, next) => {
  try {
    const { journeyId } = req.params;
    console.log(req.body);
    const updatedJourney = await Journeys.findByIdAndUpdate(journeyId, {
      startLocation: {
        coordinates: [
          req.body.originCoordinates[1],
          req.body.originCoordinates[0]
        ],
        name: req.body.originName
      },
      endLocation: {
        coordinates: [
          req.body.destinationCoordinates[1],
          req.body.destinationCoordinates[0]
        ],
        name: req.body.destinationName
      },
      time: req.body.time
    });
    return res.json({
      status: 200,
      updatedJourney
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:journeyId", async (req, res, next) => {
  try {
    const { journeyId } = req.params;
    const journey = await Journeys.findByIdAndDelete(journeyId);
    return res.json({
      status: 200,
      journey
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
