'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Locations,Narudzbina,Korpa}) {
      this.belongsTo(Locations,{foreignKey:'locationsId'});
      this.hasMany(Narudzbina,{foreignKey:'userId',as:'narudzbina',hooks:true});
      this.hasMany(Korpa,{Korpa:'userId',as:'korpa',hooks:true});
    }
  }
  Users.init({
    ime: DataTypes.STRING,
    prezime: DataTypes.STRING,
    godine: DataTypes.INTEGER,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    adresa: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
    moderator:DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};