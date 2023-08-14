'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pozicija extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Zaposleni}) {
      this.hasMany(Zaposleni,{foreignKey:'pozicijaId',as:'zaposleni',hooks:true});
    }
  }
  Pozicija.init({
    ime_pozicije: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pozicija',
  });
  return Pozicija;
};