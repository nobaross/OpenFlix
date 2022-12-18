'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('title_ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title_ratings_id: {
        type: Sequelize.STRING(20)
      },
      averageRating: {
        type: Sequelize.INTEGER(20)
      },
      numVotes: {
        type: Sequelize.INTEGER(20)
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
    await queryInterface.dropTable('title_ratings');
  }
};