//require your model

const db = require("../models");
var express = require("express")

//api routes here

module.exports = app => {
    //post route 
    app.post("/api/workout", (req, res) => {
        Workout.create(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })

    });
 //put route
 app.put("/api/workout/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: {exercises: req.body} }, { new: true })
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});
  
  //get route
    app.get("/api/workout", (req, res) => {
    Workout.find()
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});
 
 //get route
app.get("/api/workout/range", (req, res) => {
    Workout.find()
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});


}