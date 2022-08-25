const usersModel = require("../models/balancesmodel")

module.exports.balance = function(req, res){
    //const {mobile} = req.body;
    const balance = new usersModel({
        name:req.body.name,
        money:req.body.money
    })

    balance.save().then(data=>{
        res.json(data);
    })
    .catch(error=>{
        res.json(error)
    })
    
}