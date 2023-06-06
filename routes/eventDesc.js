const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Softech = require('../models/softech')

// main logic behing the storing of events data in the database

//softech k events
router.post("/event1",(req,res)=>{
    // posting which includes title,desc and image
    const {title,desc,img} = req.body;
    if(!title || !desc){
        return res.status(404).send({error:"enter all fields"})
    }

    const newEvent = new Softech({
        title,
        description:desc,
        image:img
    })

    newEvent.save().then(result=>{
        res.json({newEvent:result});
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post("/event2",(req,res)=>{
    // posting which includes title,desc and image
    const {title,desc,img} = req.body;
    if(!title || !desc){
        return res.status(404).send({error:"enter all fields"})
    }

    const newEvent = new Softech({
        title,
        description:desc,
        image:img
    })

    newEvent.save().then(result=>{
        res.json({newEvent:result});
    })
    .catch(err=>{
        console.log(err)
    })
})
module.exports = router;
