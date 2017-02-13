Employee = require('../models/').Employee;

module.exports= {
  //Get a list of all employees using model.findAll()
  index(req, res) {
    Employee.findAll()
      .then(function (employees) {
        res.status(200).json(employees);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Get an Employee by it's unique ID using model.findById()
  show(req, res) {
    Employee.findById(req.params.id)
    .then(function (employee) {
      res.status(200).json(employee);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  //Create a new Employee using model.create()
  create(req, res) {
    Employee.create(req.body)
      .then(function (newEmployee) {
        res.status(200).json(newEmployee);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Edit an existing employee using model.update()
  update(req, res) {
    Employee.update(req.body, {
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

  //Delete an existing employee by it's unique ID using model.destroy()
  delete(req, res) {
    Employee.destroy({
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
