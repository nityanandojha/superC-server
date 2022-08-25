const mongoose = require("mongoose");

const balancesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile: {
		type: String,
		required: true,
		unique: true
	},
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    childrens:{
        type: String
    },
    country:{
        type: String,
        required:true
    },
    role:{
        type: String
    },
    subscription:{
        type: String
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model("balances", balancesSchema)