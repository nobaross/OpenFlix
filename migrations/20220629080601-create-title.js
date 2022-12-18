'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TITLE', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title_id: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(20)
      },
      content_type_id: {
        type: Sequelize.INTEGER(11)
      },
      primary_title: {
        type: Sequelize.STRING(500)
      },
      original_title: {
        type: Sequelize.STRING(500)
      },
      is_adult: {
        type: Sequelize.INTEGER(11)
      },
      start_year: {
        type: Sequelize.INTEGER(11)
      },
      end_year: {
        type: Sequelize.INTEGER(11)
      },
      runtime_minutes: {
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
    await queryInterface.dropTable('TITLE');
  }
};