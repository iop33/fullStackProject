'use strict';
const {
  Model
} = require('sequelize');
const stavka_narudzbine = require('./stavka_narudzbine');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Proizvodjac,Nosilac_dozvole,Kategorija,Stavka_narudzbine,Korpa}) {
     this.belongsTo(Proizvodjac,{foreignKey:'proizvodjacId'});
     this.belongsTo(Kategorija,{foreignKey:'kategorijaId'});
     this.hasMany(Stavka_narudzbine,{foreignKey:'productId',as:'stavka_narudzbine',hooks:true});
     this.hasMany(Korpa,{foreignKey:'productId',as:'korpa',hooks:true})
    }
  }
  Product.init({
    ime: DataTypes.STRING,
    cena: DataTypes.INTEGER,
    upotreba: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};