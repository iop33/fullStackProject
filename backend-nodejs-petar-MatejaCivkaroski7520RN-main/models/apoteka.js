'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Apoteka extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Locations}) {
      this.belongsTo(Locations,{foreignKey:'locationsId'});
    }
  }
  Apoteka.init({
    ime: DataTypes.STRING,
    adresa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Apoteka',
  });
  return Apoteka;
};