const mongoose = require("mongoose");

const competionSchema = new mongoose.Schema({
    region:{
        type: String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    skills:{
        type: String,
        required:true
    },
    competitionheading:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required:true
    },
    starttime:{
        type: String,
        required:true
    },
    endtime:{
        type: String,
        required:true
    },
    noofques:{
        type: String,
        required:true
    },
    questionid:{
        type: String,
    }
})

module.exports = mongoose.model("competions", competionSchema)