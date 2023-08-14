'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Narudzbina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Stavka_narudzbine,Users,Nacin_placanja}) {
      this.hasMany(Stavka_narudzbine,{foreignKey:'narudzbinaId',as:'stavka_narudzbine',hooks:true});
      this.belongsTo(Users,{foreignKey:'userId'});
      this.belongsTo(Nacin_placanja,{foreignKey:'nacin_placanjaid'});
    }
  }
  Narudzbina.init({
    vremeKreiranja: DataTypes.DATE,
    recept: DataTypes.TEXT,
    nacin_placanjaid: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Narudzbina',
  });
  return Narudzbina;
};