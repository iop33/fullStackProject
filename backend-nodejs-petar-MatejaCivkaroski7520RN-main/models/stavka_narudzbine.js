'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stavka_narudzbine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product,Narudzbina}) {
      this.belongsTo(Product,{foreignKey:'productId'});
      this.belongsTo(Narudzbina,{Narudzbina:'narudzbinaId'});
    }
  }
  Stavka_narudzbine.init({
    kolicina: DataTypes.INTEGER,
    cena: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stavka_narudzbine',
  });
  return Stavka_narudzbine;
};