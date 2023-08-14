const express = require('express');
const { sequelize, User, Zaposleni,Locations,Apoteka,Kategorija,Korpa,Nacin_placanja,
    Narudzbina,Pozicija,Product,Proizvodjac,Stavka_narudzbine } = require('./models');
const cors = require('cors');


const userapi = require('./routes/users.js');
const zaposleniapi = require('./routes/zaposleni.js');
const locationapi = require('./routes/location.js');
const apotekaapi = require('./routes/apoteka.js');
const korpaapi = require('./routes/korpa.js');
const nacin_placanjaapi = require('./routes/nacin_placanja.js');
const narudzbinaapi = require('./routes/narudzbina.js');
const  pozicijaapi= require('./routes/pozicija.js');
const productapi = require('./routes/product.js');
const proizvodjacapi = require('./routes/proizvodjac.js');
const stavka_narudzbineapi = require('./routes/stavka_narudzbine.js');
const kategorijaapi = require('./routes/kategorija.js');


const app = express();

var corsOptions = {
    origin: 'http://127.0.0.1:8080',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));


app.use('/admin/users', userapi);
app.use('/admin/zaposleni', zaposleniapi);
app.use('/admin/location', locationapi);
app.use('/admin/apoteka', apotekaapi);
app.use('/admin/korpa', korpaapi);
app.use('/admin/nacin_placanja', nacin_placanjaapi);
app.use('/admin/narudzbina', narudzbinaapi);
app.use('/admin/pozicija', pozicijaapi);
app.use('/admin/product', productapi);
app.use('/admin/proizvodjac', proizvodjacapi);
app.use('/admin/stavka_narudzbine', stavka_narudzbineapi);
app.use('/admin/kategorija', kategorijaapi);


app.listen({ port: 8100 }, async () => {
    await sequelize.authenticate();
    console.log("povezan app za apprest");
});