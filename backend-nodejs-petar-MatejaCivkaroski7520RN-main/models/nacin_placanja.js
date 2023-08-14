'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nacin_placanja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Narudzbina}) {
      this.hasMany(Narudzbina,{foreignKey:'nacin_placanjaid',as:'narudzbina',hooks:true});
    }
  }
  Nacin_placanja.init({
    nacin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nacin_placanja',
  });
  return Nacin_placanja;
};