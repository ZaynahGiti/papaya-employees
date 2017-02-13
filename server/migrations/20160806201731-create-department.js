'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    //Define the Departments table
    return queryInterface.createTable('Departments', {

      //Define the Departments fields properties
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.TEXT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    //Define the dropTable command used while rolling back migrations
    return queryInterface.dropTable('Departments');
  }
};
