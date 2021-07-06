'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      estudante_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Pessoas', key: 'id' }
      },
      turma_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Turmas', key: 'id' }
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Matriculas');
  }
};