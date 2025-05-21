'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PropostaCredito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PropostaCredito.init({
    valor: DataTypes.FLOAT,
    taxa: DataTypes.FLOAT,
    parcelas: DataTypes.INTEGER,
    instituicao: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PropostaCredito',
  });
  return PropostaCredito;
};