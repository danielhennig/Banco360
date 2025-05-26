module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cpf: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Usuario.associate = (models) => {
        Usuario.hasOne(models.Conta, { foreignKey: 'usuarioId' });
        Usuario.hasMany(models.Oferta, { foreignKey: 'usuarioId' });
        Usuario.hasMany(models.Consentimento, { foreignKey: 'usuarioId' });
    };

    return Usuario;
};
