const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const routesURL = require("./routes/routes")
const usersModel = require("./models/users")
const questionBankModel = require("./models/questionBankModel");
const bettlesModel = require("./models/bettlesModel")
const competitionModel = require("./models/competitionModel")

const app = express();
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, ()=>{
    console.log("Database connected...");
})
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})

app.use(express.json()) 
app.use(cors({
    origin: "*",
    credentials: true
}))
//app.use("/signup", routesURL)

app.post("/login", (req, res)=>{
    //res.send(" hhhhhhhhhhhhhhhhh ")
    const {email, password} = req.body;
    usersModel.findOne({email:email}, (err, user) =>{
        if(user){
            if(password == user.password){
                res.send({message:"Logged in", success:true, role:user.role, user:user})
            }else{
                res.send({message:"Incorrect password"})
            }
        }else{
            res.send("You are not registered")
        }
    })
})

app.post("/registeruser", (req, res)=>{
    //res.send(" === ")
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

app.post("/bettles", (req, res)=>{
    const bettles = new bettlesModel({
        "region":req.body.region,
        "year":req.body.year,
        "subject":req.body.subject,
        "skills":req.body.skills,
        "competitionheading":req.body.competitionheading,
        "date":req.body.date,
        "starttime":req.body.starttime,
        "endtime":req.body.endtime,
        "noofques":req.body.noofques
    })

    bettles.save().then(data=>{
        res.json(data);
    })
    .catch(error=>{
        res.json(error)
    })
})

app.post("/competion", (req, res)=>{
    const {subject, skills} = req.body;
    questionBankModel.find({subject:subject, skills:skills}, (err, ques) =>{
        if(ques){
            let allID = "";
            for(let i=0; i<ques.length; i++){
                allID += ques[i]._id+","
            }
            
            const competion = new competitionModel({
                "region":req.body.region,
                "year":req.body.year,
                "subject":req.body.subject,
                "skills":req.body.skills,
                "competitionheading":req.body.competitionheading,
                "date":req.body.date,
                "starttime":req.body.starttime,
                "endtime":req.body.endtime,
                "noofques":req.body.noofques,
                "questionid":allID
            })
        
            competion.save().then(data=>{
                res.json(data);
            })
            .catch(error=>{
                res.json(error)
            })
        }else{
            res.send("error")
        }
    })
})

app.post("/fetchallcompetions", (req, res)=>{
    //const {_id} = req.body;
    competitionModel.find({}, (err, compt) =>{
        res.send({message:"success", success:true, competitions:compt})
    })
})

app.post("/questionbank", (req, res)=>{
    const questionBank = new questionBankModel({
        "country":req.body.country,
        "age":req.body.age,
        "class":req.body.class,
        "subject":req.body.subject,
        "skillid":req.body.skillid,
        "skills":req.body.skills,
        "subjecttopicid":req.body.subjecttopicid,
        "subjecttopic":req.body.subjecttopic,
        "dificultylevel":req.body.dificultylevel,
        "formatid":req.body.formatid,
        "format":req.body.format,
        "question":req.body.question
    })

    questionBank.save().then(data=>{
        res.json(data);
    })
    .catch(error=>{
        res.json(error)
    })
})


app.post("/fetchquestion", (req, res)=>{
    const {_id} = req.body;
    questionBankModel.findOne({_id:_id}, (err, user) =>{
        if(user){
            if(_id == user._id){
                res.send({message:"", success:true, user:user})
            }else{
                res.send({message:"Incorrect ID"})
            }
        }else{
            res.send("id mismatched")
        }
    })
})

app.post("/allquestion", (req, res)=>{
    const {subject} = req.body;
    questionBankModel.find({subject:subject}, (err, ques) =>{
        /* if(ques){
            if(subject == ques.subject){
                res.send({message:"", success:true, ques:ques})
            }else{
                res.send({message:"Incorrect ID"})
            }
        }else{
            res.send("id mismatched")
        } */
        res.send({message:"", success:true, ques:ques})
    })
})


app.listen(4000, ()=> console.log("server is up"))