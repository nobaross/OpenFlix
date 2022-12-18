'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('talent_roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      talent_id: {
        type: Sequelize.STRING(20)
      },
      role_id: {
        type: Sequelize.INTEGER(11)
      },
      ord: {
        type: Sequelize.INTEGER(11)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('talent_roles');
  }
};