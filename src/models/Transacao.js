module.exports = (sequelize, DataTypes) => {
    const Transacao = sequelize.define('Transacao', {

        numeroConta: {
            type: DataTypes.UUID,
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valor: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        freezeTableName: true  // <- aqui forçamos o nome correto da tabela
    });

    return Transacao;
};
