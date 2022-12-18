'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('title_episodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title_id: {
        type: Sequelize.STRING(20)
      },
      parent_title_id: {
        type: Sequelize.STRING(20)
      },
      season_number: {
        type: Sequelize.INTEGER(11)
      },
      episode_number: {
        type: Sequelize.INTEGER(11)
      },
      title_title_id: {
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
    await queryInterface.dropTable('title_episodes');
  }
};