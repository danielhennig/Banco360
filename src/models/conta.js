module.exports = (sequelize, DataTypes) => {
    const Conta = sequelize.define('Conta', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        numeroConta: DataTypes.STRING,
        saldo: { type: DataTypes.DECIMAL, defaultValue: 0 },
        criadoEm: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });

    Conta.associate = (models) => {
        Conta.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
        Conta.hasMany(models.Transacao, { foreignKey: 'contaId' });
    };

    return Conta;
};