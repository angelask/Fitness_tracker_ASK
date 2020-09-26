//require your model
const router = require("express").Router();
const workout = require("../models/workout.js");


//api routes here

// module.exports = app => {
    //post route 
    router.post("/api/workouts", (req, res) => {
        workout.create({})
        .then(data => {
            console.log(data);
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })

    });

    //put route
    router.put("/api/workouts/:id", (req, res) => {
        workout.findByIdAndUpdate(req.params.id, { $push: {exercises: req.body} }, { new: true, runValidators: true })
        .then(data =>{
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });
  
    //get route
    router.get("/api/workouts", (req, res) => {
        workout.find()
        .then(data =>{
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });
 
    //get route
    router.get("/api/workouts/range", (req, res) => {
        workout.find({}).limit(7)
        .then(data =>{
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });

module.exports = router;
