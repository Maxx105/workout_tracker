const router = require("express").Router();
const Workout = require("../models/workout.js");

// get route to get all data in database
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// get route to get first five data collections for displaying on dashboard
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(5)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// post route to post new workout collections
router.post("/api/workouts", (req, res) => {
    Workout.create(req)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// update route that updates the exercise collection by ID
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {exercises: req.body}, {new: true})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });  
});

module.exports = router;