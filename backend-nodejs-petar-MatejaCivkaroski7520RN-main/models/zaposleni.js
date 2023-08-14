'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zaposleni extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Pozicija}) {
      this.belongsTo(Pozicija,{foreignKey:'pozicijaId',as:'pozicija'});
    }
  }
  Zaposleni.init({
    ime: DataTypes.STRING,
    plata: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Zaposleni',
  });
  return Zaposleni;
};