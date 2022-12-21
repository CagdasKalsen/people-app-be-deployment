const express = require("express");
const router = express.Router();
// IMPORT MODEL(PEOPLE)
const { People } = require("../models");

//Routes
//http://localhost:4000/people/
router.get("/", async(req, res) => {
    // res.status(200).json({ message: "People Index/Get Route" });
    try {
        const allPepple = await People.find({});
        res.status(200).json(allPepple);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});
// Post
//http://localhost:4000/people/
router.post("/", async(req, res) => {
    console.log("Post Route", req.body);
    // res.status(201).json({ message: "People Create/Post Route" });
    try {
        const newPerson = await People.create(req.body);
        res.status(201).json(newPerson);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

// People Show Route
router.get("/:id", async(req, res) => {
    // res.status(201).json({ message: "People Show Route " + req.params.id });
    try {
        const showPeople = await People.findById(req.params.id);
        res.status(201).json(showPeople);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

//People Delete Route
router.delete("/:id", async(req, res) => {
    // res.status(200).json({ message: "People Delete Route " + req.params.id });
    try {
        const deletePeople = await People.findByIdAndDelete(req.params.id);
        res.status(201).json(deletePeople);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

// People Update Route
router.put("/:id", async(req, res) => {
    // res.status(200).json({ message: "People Update Route " + req.params.id });

    try {
        const updatePeople = await People.findByIdAndUpdate(
            req.params.id,
            req.body, { new: true }
        );
        res.status(201).json(updatePeople);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

module.exports = router;