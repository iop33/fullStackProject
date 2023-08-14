const {sequelize,Users}=require("./models");
const express = require("express");
const jwt=require('jsonwebtoken');
const cors=require('cors');
const bcrypt=require('bcrypt');
const Joi = require("joi");
require('dotenv').config();
const app=express();

var corsOptions = {
    origin: 'http://127.0.0.1:8080',
    optionsSuccessStatus: 200
}
app.use(express.json());
app.use(cors(corsOptions));



app.post('/register',(req,res)=>{

    const prov = Joi.object().keys({
        ime: Joi.string().min(3).max(15).required(),
        prezime: Joi.string().min(3).max(20).required(),
        email: Joi.string().trim().email().required(),
        godine:Joi.number().min(18).required(),
        password: Joi.string().min(5).required(),
        admin: Joi.boolean(),
        moderator: Joi.boolean(),
        locationsId:Joi.number(),
        adresa: Joi.string().trim().required()
     });
    const Validation = prov.validate(req.body);

  
    if(Validation.error){
        res.status(422).json({ msg: Validation.error.message })
    }
    else{

    const obj={

        ime: req.body.ime,
        prezime: req.body.prezime,
        password: bcrypt.hashSync(req.body.password,10), 
        godine: req.body.godine,
        email: req.body.email,
        adresa: req.body.adresa,
        locationsId: req.body.locationsId,
        admin:req.body.admin,
        moderator:req.body.moderator

    };

     Users.create(obj).then(rows=>{
        const usr = {
            userId: rows.id,
            username: rows.ime
        };
        const token=jwt.sign(usr,process.env.ACCESS_TOKEN_SECRET);
        res.json({token});
     });
    } 
});
    
app.post('/login',(req,res)=>{

    const schema = Joi.object().keys({
        ime: Joi.string().trim().required(),
        password: Joi.string().required()
    });
    const Validation = schema.validate(req.body);

  
    if(Validation.error){
        res.status(422).json({ msg: Validation.error.message })
    }
    
    Users.findOne({where:{ime:req.body.ime}})
    .then(usr=>{
        if (bcrypt.compareSync(req.body.password, usr.password)){

            const userInfo = {
                userId: usr.id,
                username: usr.ime 
            };
            const token = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET);

            res.json({ token: token, userId: usr.id})
        
        }
        else{
            res.status(400).json('Lose uneseni username ili sifra' )
        }
    })
  
});



app.listen({ port: 9000 }, async () => {
    await sequelize.authenticate();
    console.log("auth");
});