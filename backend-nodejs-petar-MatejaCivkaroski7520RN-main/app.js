const express = require("express");
const { sequelize} = require("./models");
const jwt=require('jsonwebtoken');
require('dotenv').config();
const app = express();


app.use(express.json({limit:"10kb"}));

/**
 * {  
        "ime": "probni",
        "prezime":"prr",
        "password": "password" ,
        "godine": 20,
        "email": "prob@gm.com",
        "adresa": "Ulica a",
        "locationsId": 2,
        "admin":true,
        "moderator":true
   
}
 */

app.get('/',(req,res)=>{
  console.log('radi logovanje');
});

app.listen({ port: 8000},async()=>{
  await sequelize.authenticate();
});

