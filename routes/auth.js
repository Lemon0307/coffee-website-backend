const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../schemas/User');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

router.post('/sign-up', bodyParser.json(), async(req, res) => {
    const {firstName, surname, username, email, password} = req.body
    User.find({email: email}, async function(err, docs) {
        if (docs.length) {
            res.status(403).json({message: 'This email already exists'})
        } else {
            bcrypt.hash(password, 10, async(err, hash) => {
                const user = new User({firstName, surname, username, email, hash})
                await user.save()
            })
            res.json({url: "/login", message: "Successfuly signed up!"})
            console.log('a new user has been created')
        }
    })
})

router.post('/login', bodyParser.json(), async(req, res) => {
    
})

module.exports = router