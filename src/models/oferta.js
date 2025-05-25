module.exports = (sequelize, DataTypes) => {
    const Oferta = sequelize.define('Oferta', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        titulo: DataTypes.STRING,
        descricao: DataTypes.STRING,
        taxaJuros: DataTypes.DECIMAL,
        valorMaximo: DataTypes.DECIMAL,
        parcelas: DataTypes.INTEGER
    });

    Oferta.associate = (models) => {
        Oferta.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
    };

    return Oferta;
};