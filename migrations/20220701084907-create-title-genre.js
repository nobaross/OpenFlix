'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('title_genres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title_id: {
        type: Sequelize.STRING(20)
      },
      genre_id: {
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
    await queryInterface.dropTable('title_genres');
  }
};