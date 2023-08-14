const {sequelize,Narudzbina,Users}=require("../models");
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
    if(usr.admin === false && usr.moderator === false) res.status(403).json({status:"korisnik nije admin!"});
    next();

}

rtr.use(authToken);

rtr.get("/",(req,res)=>{

    Narudzbina.findAll()
    .then(rows=>res.json(rows))
    .catch(err=>res.status(500).json(err));
});
rtr.get("/:id",(req,res)=>{

    Narudzbina.findOne({where: {id:req.params.id}})
    .then(rows=>res.json(rows))
    .catch(err=>res.status(500).json(err));
});
rtr.post("/",(req,res)=>{

    const prov = Joi.object().keys({
        vremeKreiranja:Joi.date().required(),
        userId:Joi.number().required(),
        nacin_placanjaid:Joi.number().required(),
     });
    const Validation = prov.validate(req.body);

  
    if(Validation.error){
        res.status(422).json({ msg: Validation.error.message })
    }
    else{
        Narudzbina.create({
            vremeKreiranja: req.body.vremeKreiranja,
            userId:req.body.userId,
            nacin_placanjaid:req.body.nacin_placanjaid
           
        })
        .then(rows=>res.json(rows))
        .catch(err=>res.status(500).json(err));
    }
    
});
rtr.put("/:id",(req,res)=>{
    const prov = Joi.object().keys({
        vremeKreiranja:Joi.date().required(),
        userId:Joi.number().required(),
        nacin_placanjaid:Joi.number().required(),
       
     });
    const Validation = prov.validate(req.body);

  
    if(Validation.error){
        res.status(422).json({ msg: Validation.error.message })
    }
    else{
        Narudzbina.findOne({where: {id:req.params.id}})
        .then(narudzbina=>{
            narudzbina.vremeKreiranja= req.body.vremeKreiranja,
            narudzbina.userId=req.body.userId,
            narudzbina.nacin_placanjaid=req.body.nacin_placanjaid
            narudzbina.save()
        })
        .then(rows=>res.json(rows))
        .catch(err=>res.status(500).json(err));
    }
   
});
rtr.delete("/:id",(req,res)=>{

    Narudzbina.findOne({where: {id:req.params.id}})
    .then(narudzbina=>{
        narudzbina.destroy()
    })
    .then(rows=>res.json(rows))
    .catch(err=>res.status(500).json(err));
});
module.exports=rtr;