'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proizvodjac extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product}) {
      this.hasMany(Product,{foreignKey:'proizvodjacId',as:'product',hooks:true});
    }
  }
  Proizvodjac.init({
    ime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Proizvodjac',
  });
  return Proizvodjac;
};