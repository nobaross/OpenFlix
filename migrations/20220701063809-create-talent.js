'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('talents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      talent_id: {
        type: Sequelize.STRING(20)
      },
      talent_name: {
        type: Sequelize.STRING(500)
      },
      birth_year: {
        type: Sequelize.INTEGER(11)
      },
      death_year: {
        type: Sequelize.INTEGER(11)
      },
      title_principal_title_id: {
        type: Sequelize.STRING(20)
      },
      title_principal_talent_id: {
        type: Sequelize.STRING(20)
      },
      title_principal_ord: {
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
    await queryInterface.dropTable('talents');
  }
};