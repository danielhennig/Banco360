module.exports = (sequelize, DataTypes) => {
    const Transacao = sequelize.define('Transacao', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        tipo: DataTypes.STRING,
        descricao: DataTypes.STRING,
        valor: DataTypes.DECIMAL,
        data: DataTypes.DATE,
    });

    Transacao.associate = (models) => {
        Transacao.belongsTo(models.Conta, { foreignKey: 'contaId' });
    };

    return Transacao;
};