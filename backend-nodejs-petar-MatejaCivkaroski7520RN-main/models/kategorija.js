'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategorija extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product}) {
      this.hasMany(Product,{foreignKey:'kategorijaId',as:'product',hooks:true});
    }
  }
  Kategorija.init({
    vrsta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kategorija',
  });
  return Kategorija;
};