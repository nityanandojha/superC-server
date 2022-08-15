const usersModel = require("../models/users")

module.exports.signup = function(req, res){
    const {mobile} = req.body;
    usersModel.findOne({mobile:mobile}, (err, a) =>{
        if(a){
            res.send("You are alredy registered.");
            return
        }

        const users = new usersModel({
            name:req.body.name,
            mobile:req.body.mobile,
            email:req.body.email,
            password:req.body.password,
            childrens:req.body.childrens,
            country:req.body.country,
            subscription:req.body.subscription,
            role:req.body.role
        })
    
        users.save().then(data=>{
            res.json(data);
        })
        .catch(error=>{
            res.json(error)
        })
    })
    
}

