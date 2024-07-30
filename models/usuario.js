'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.usuario.belongsToMany(models.perfil, { through: 'perfilusuarios',foreignKey: "usuario_id" });
    }
  }
  usuario.init({
    usuario: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
    tableName: 'usuarios'
  });
  return usuario;
};