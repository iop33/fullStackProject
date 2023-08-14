const {sequelize,Korpa,Users}=require("../models");
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

    Korpa.findAll()
    .then(rows=>res.json(rows))
    .catch(err=>res.status(500).json(err));
});
rtr.get("/:id",(req,res)=>{

    Korpa.findOne({where: {id:req.params.id}})
    .then(rows=>res.json(rows))
    .catch(err=>res.status(500).json(err));
});
rtr.post("/",(req,res)=>{

    const prov = Joi.object().keys({
        kolicina: Joi.number().min(1).required(),
        userId:Joi.number().required(),
        productId:Joi.number().required(),
       
     });
    const Validation = prov.validate(req.body);

  
    if(Validation.error){
        res.status(422).json({ msg: Validation.error.message })
    }
    else{
        Korpa.create({
            kolicina: req.body.kolicina,
            userId: req.body.userId,
            productId: req.body.productId,
           
        })
        .then(rows=>res.json(rows))
        .catch(err=>res.status(500).json(err));
    }
    
});
rtr.put("/:id",(req,res)=>{
    const prov = Joi.object().keys({
        kolicina: Joi.number().min(1).required(),
        userId:Joi.number().required(),
        productId:Joi.number().required(),
       
     });
    const Validation = prov.validate(req.body);

  
    if(Validation.error){
        res.status(422).json({ msg: Validation.error.message })
    }
    else{
        Korpa.findOne({where: {id:req.params.id}})
        .then(korpa=>{
            korpa.kolicina= req.body.kolicina,
            korpa.userId= req.body.userId,
            korpa.productId= req.body.productId,
            korpa.save()
        })
        .then(rows=>res.json(rows))
        .catch(err=>res.status(500).json(err));
    }
   
});
rtr.delete("/:id",(req,res)=>{

    Korpa.findOne({where: {id:req.params.id}})
    .then(korpa=>{
        korpa.destroy()
    })
    .then(rows=>res.json(rows))
    .catch(err=>res.status(500).json(err));
});
module.exports=rtr;