const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../schemas/User');
const bodyParser = require('body-parser')

router.post('/sign-up', bodyParser.json(), async(req, res) => {
    const {firstName, surname, username, email, password} = req.body
    User.find({email: email}, async function(err, docs) {
        if (docs.length) {
            res.status(403).json({message: 'This email already exists'})
        } else {
            const user = new User({firstName, surname, username, email, password})
            await user.save()
            res.json({url: "/login", message: "Successfuly signed up!"})
            console.log('a new user has been created')
        }
    })
})

module.exports = router