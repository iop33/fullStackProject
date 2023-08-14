'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Apoteka,Users}) {
      this.hasMany(Apoteka,{foreignKey:'locationsId',as:'apoteka',hooks:true});
      this.hasMany(Users,{foreignKey:'locationsId',as:'users',hooks:true});
    }
  }
  Locations.init({
    grad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Locations',
  });
  return Locations;
};