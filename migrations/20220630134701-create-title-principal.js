'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('title_principals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(20)
      },
      title_id: {
        type: Sequelize.STRING(20)
      },
      talent_id: {
        type: Sequelize.STRING(11)
      },
      ord: {
        type: Sequelize.INTEGER(11)
      },
      category_id: {
        type: Sequelize.INTEGER(11)
      },
      job: {
        type: Sequelize.STRING(1000)
      },
      role_names: {
        type: Sequelize.STRING(1000)
      },
      category_category_id: {
        type: Sequelize.INTEGER(11)
      },
      title_tile_id: {
        type: Sequelize.STRING(20)
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
    await queryInterface.dropTable('title_principals');
  }
};