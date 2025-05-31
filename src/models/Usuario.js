module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  });

  Usuario.associate = (models) => {
    Usuario.hasOne(models.Conta, { foreignKey: 'usuarioId' });
  };

  return Usuario;
};
