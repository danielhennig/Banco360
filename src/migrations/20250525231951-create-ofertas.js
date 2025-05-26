'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ofertas', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
      },
      taxaJuros: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      valorMaximo: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      parcelas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      usuarioId: {
        type: Sequelize.UUID,
        references: { model: 'Usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Ofertas');
  },
};
