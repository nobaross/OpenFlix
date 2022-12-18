'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('title_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title_type_id: {
        type: Sequelize.INTEGER(20)
      },
      title_type_name: {
        type: Sequelize.STRING(100)
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
    await queryInterface.dropTable('title_types');
  }
};