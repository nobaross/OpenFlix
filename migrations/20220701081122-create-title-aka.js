'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('title_akas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title_id: {
        type: Sequelize.STRING(20)
      },
      ord: {
        type: Sequelize.INTEGER(11)
      },
      aka_title: {
        type: Sequelize.STRING(500)
      },
      region_id: {
        type: Sequelize.STRING(10)
      },
      language_id: {
        type: Sequelize.STRING(10)
      },
      additional_altrvs: {
        type: Sequelize.STRING(500)
      },
      its_original_title: {
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
    await queryInterface.dropTable('title_akas');
  }
};