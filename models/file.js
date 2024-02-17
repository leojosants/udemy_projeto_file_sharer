'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      File.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  File.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    caminho: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'File',
  });
  return File;
};