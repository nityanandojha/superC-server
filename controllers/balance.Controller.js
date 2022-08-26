const balanceModel = require("../models/balancesmodel")

module.exports.balance = function(req, res){
    //const {mobile} = req.body;

    const balance = new balanceModel({
        name:req.body.shopname,
        money:req.body.money
    })

    balance.save().then(data=>{
        res.json(data);
    })
    .catch(error=>{
        res.json(error)
    })
    
}

module.exports.totalBalance = function(req, res){
    balanceModel.find({}, (err, array)=>{
        var total = 0;
        array.forEach((item, index)=>{
            total += item.money;
        })
        
       res.send({message:"success", success:true, total:total});           
    })
}