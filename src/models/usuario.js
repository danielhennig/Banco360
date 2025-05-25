module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nome: DataTypes.STRING,
        cpf: { type: DataTypes.STRING, unique: true },
        email: { type: DataTypes.STRING, unique: true },
        senha: DataTypes.STRING,
        criadoEm: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });

    Usuario.associate = (models) => {
        Usuario.hasOne(models.Conta, { foreignKey: 'usuarioId' });
        Usuario.hasMany(models.Oferta, { foreignKey: 'usuarioId' });
        Usuario.hasMany(models.Consentimento, { foreignKey: 'usuarioId' });
    };

    return Usuario;
};