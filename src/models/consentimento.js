module.exports = (sequelize, DataTypes) => {
    const Consentimento = sequelize.define('Consentimento', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        escopo: DataTypes.STRING,
        validoAte: DataTypes.DATE,
    });

    Consentimento.associate = (models) => {
        Consentimento.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
    };

    return Consentimento;
};
