// Dependencies
const express = require('express');
const router = express.Router();
const burgers = require('../models/burgers.js');

//Sets up Routes
router.get('*', function (req, res) {
    burgers.all(function (data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    })
});

router.post('/api', function (req, res) {
    console.log(req.body)
    burgers.create([
        req.body.burger_name
    ], function (result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

router.put('/api/:id', function (req, res) {
    // QUESTION: because this has the condition as the id should I remove the id in the orm method?
    // let condition = "id = " + req.params.id;

    // console.log("condition", condition);
    // console.log(req.body.devoured)

    burgers.update(req.params.id, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// Exports router
module.exports = router;

// QUESTION: DID NOT SEE THE URL CHANGE IN THE DEMO - CAN THEY ALL BE AT THE ROUTE???