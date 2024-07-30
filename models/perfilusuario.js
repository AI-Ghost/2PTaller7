'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perfilusuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  perfilusuario.init({
    usuario_id: DataTypes.INTEGER,
    perfil_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'perfilusuario',
    tableName: 'perfilusuarios'
  });
  return perfilusuario;
};