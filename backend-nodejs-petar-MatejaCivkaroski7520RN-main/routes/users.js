const {sequelize,Users}=require("../models");
const express = require("express");
const jwt=require('jsonwebtoken');
const {promisify}=require('util');
const bcrypt=require('bcrypt');
const Joi = require("joi");
require('dotenv').config();
const rtr=express.Router();
rtr.use(express.json());

async function authToken (req, res, next){

    const auth=req.headers['authorization'];
    const token= auth && auth.split(' ')[1];

    if(token==null)return res.status(401).json('null token');
    
    const payload=await promisify(jwt.verify)(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(payload);
    const usr=await Users.findOne({where:{id:payload.userId}});
    if(!usr)return res.status(403).json({status:"korisnik nije ulogovan!"});
    req.user=usr;
    if(usr.admin === false) res.status(403).json({status:"korisnik nije admin!"});
    next();

}

rtr.use(authToken);

rtr.get("/",(req,res)=>{

    Users.findAll()
    .then(rows=>res.json(rows))
    .catch(err=>res.status(500).json(err));
});
rtr.get("/:id",(req,res)=>{

    Users.findOne({where: {id:req.params.id}})
    .then(rows=>res.json(rows))
    .catch(err=>res.status(500).json(err));
});
rtr.post("/",(req,res)=>{

    const prov = Joi.object().keys({
        ime: Joi.string().min(3).max(15).required(),
        prezime: Joi.string().min(3).required(),
        email: Joi.string().trim().email().required(),
        godine:Joi.number().min(18).required(),
        password: Joi.string().min(5).max(50).required(),
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
        Users.create({
            ime: req.body.ime,
            prezime: req.body.prezime,
            password: bcrypt.hashSync(req.body.password,10),
            godine: req.body.godine,
            email: req.body.email,
            adresa: req.body.adresa,
            locationsId: req.body.locationsId,
            admin:req.body.admin,
            moderator:req.body.moderator
    
        })
        .then(rows=>res.json(rows))
        .catch(err=>res.status(500).json(err));
    }
    
});
rtr.put("/:id",(req,res)=>{
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
        Users.findOne({where: {id:req.params.id}})
        .then(user=>{
            user.ime= req.body.ime,
            user.prezime= req.body.prezime,
            user.password=req.body.password, 
            user.godine= req.body.godine,
            user.email= req.body.email,
            user.adresa= req.body.adresa,
            user.locationsId= req.body.locationsId,
            user.admin=req.body.admin,
            user.moderator=req.body.moderator
            user.save()
        })
        .then(rows=>res.json(rows))
        .catch(err=>res.status(500).json(err));
    }
   
});
rtr.delete("/:id",(req,res)=>{

    Users.findOne({where: {id:req.params.id}})
    .then(user=>{
        user.destroy()
    })
    .then(rows=>res.json(rows))
    .catch(err=>res.status(500).json(err));
});
module.exports=rtr;