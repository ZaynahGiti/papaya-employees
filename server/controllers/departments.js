Department = require('../models/').Department;
Employee = require('../models/').Employee;

module.exports= {
  //Get a list of all departments using model.findAll()
  index(req, res) {
    Department.findAll({
      //Return all employees that have a matching department_id for each Department
      include: Employee
    })
      .then(function (departments) {
        res.status(200).json(departments);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Get department by the unique ID using model.findById()
  show(req, res) {
    Department.findById(req.params.id, {
      //Return all employees that have a matching department_id for the Department
      include: Employee
    })
    .then(function (department) {
      res.status(200).json(department);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
  },

  //Create a new department using model.create()
  create(req, res) {
    Department.create(req.body)
      .then(function (newDepartment) {
        res.status(200).json(newDepartment);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Edit an existing department details using model.update()
  update(req, res) {
    Department.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedRecords) {
      res.status(200).json(updatedRecords);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
  },

  //Delete an existing department by the unique ID using model.destroy()
  delete(req, res) {
    Department.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedRecords) {
      res.status(200).json(deletedRecords);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
  }
};
