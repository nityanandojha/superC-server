const mongoose = require("mongoose");

const questionBankSchema = new mongoose.Schema({
    country:{
        type: String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    skillid: {
		type: String,
		required: true
	},
    skills:{
        type: String,
        required:true
    },
    subjecttopicid:{
        type: String,
        required:true
    },
    subjecttopic:{
        type: String,
        required:true
    },
    dificultylevel:{
        type: String,
        required:true
    },
    formatid:{
        type: String,
        required:true
    },
    format:{
        type: String,
        required:true
    },
    question:{
        type: Object,
        required:true
    }
})

module.exports = mongoose.model("questionBank", questionBankSchema)