const express = require("express");
const router = express.Router();
const usersModel = require("../models/users")

router.post("./signup", (reuest, response)=>{
    console.log(" sdaf asfd asdf ");
        const users = new usersModel({
            name:req.body.name,
            dob:req.body.dob,
            username:req.body.username,
            mobile:req.body.mobile, 
            email:req.body.email,
            password:req.body.password,
            childrens:req.body.childrens,
            country:req.body.country
        })

        users.save().then(data=>{
            response.json(data);
        })
        .catch(error=>{
            response.json(error)
        })
})

module.exports = router