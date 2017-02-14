'use strict';
module.exports = function(sequelize, DataTypes) {
  //Define the Employee model
  var Employee = sequelize.define('Employee', {
    //Define the data types of the Employee fields
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    profile: DataTypes.profile,
    birth_date: DataTypes.DATE,
    description: DataTypes.TEXT,
    department_id: DataTypes.INTEGER
  }, {
    //set the timestamps to be underscored: (created_at, updated_at)
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Employee;
};
