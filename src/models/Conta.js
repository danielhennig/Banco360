module.exports = (sequelize, DataTypes) => {
  const Conta = sequelize.define('Conta', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    numeroConta: DataTypes.STRING,
    saldo: DataTypes.FLOAT
  });

  Conta.associate = (models) => {
    Conta.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
  };

  return Conta;
};
