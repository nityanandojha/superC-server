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
    let {shopename} = req.body;
    console.log(shopename);
    balanceModel.find({name:shopename}, 'money', (err, array)=>{
        var total = 0;
        array.forEach((item, index)=>{
            total += item.money;
        })
        
        if(shopename == 'milk'){
            total = total*65;
        }
        
       res.send({message:"success", success:true, total:total});           
    })
}