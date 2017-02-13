'use strict';
module.exports = function(sequelize, DataTypes) {
  //Define the Author model
  var Department = sequelize.define('Department', {
    //Define the data types of the Author fields
    name: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    //set the timestamps to be underscored: (created_at, updated_at)
    underscored: true,
    classMethods: {
      associate: function(models) {
        //An department can have many employees.
        Department.hasMany(models.Employee, {
          onDelete: 'cascade'
        });
      }
    }
  });
  return Department;
};
