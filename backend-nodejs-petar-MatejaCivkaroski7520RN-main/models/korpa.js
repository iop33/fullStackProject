'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Korpa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users,Product}) {
      this.belongsTo(Users,{foreignKey:'userId'});
      this.belongsTo(Product,{foreignKey:'productId'});
    }
  }
  Korpa.init({
    kolicina: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Korpa',
  });
  return Korpa;
};