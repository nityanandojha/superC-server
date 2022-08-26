const mongoose = require("mongoose");

const balancesSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    money: {
		type: Number
	},
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model("balances", balancesSchema)