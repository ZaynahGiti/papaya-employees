class EmployeeManager {
    constructor(server) {
        this.employees = [];
        // Register employee handlers
        server.use('POST', /^\/employee\?name=(.*)$/, (req, res, params) => this.handleNew(req, res, params));
        server.use('GET', /^\/employees$/, (req, res, params) => this.handleList(req, res, params));
        server.use('GET', /^\/employee\/([\d*])$/, (req, res, params) => this.handleGet(req, res, params));
        server.use('DELETE', /^\/employee\/([\d*])$/, (req, res, params) => this.handleDelete(req, res, params));
        server.use('POST', /^\/employee\/([\d*])\?name=(.*)$/, (req, res, params) => this.handleUpdate(req, res, params));
    }

    // Add a new employee
    
     handleNew(req, res, params) {
      //params
      //0 = name
      //1 = image
      //2 = mail
      //3 = department
      if (unescape(params[0]) && unescape(params[1]) && unescape(params[2]) && unescape(params[3]) ) {
        this.employees.push({
            id: this.employee.length + 1,
            name: unescape(params[0]),
            img: unescape(params[1]),
            mail: unescape(params[2])
          })
          
          var deparment = this.departments.find(function (department, index, array){
            if  (department.id == unescape(params[3]) ) {
              this.departments[index].employees.push(this.employee.length)
            } else {
              console.log ("still searching")
            }
          })
          
          res.write(JSON.stringify(this.departments[this.departments.length - 1]));
          res.end();
        }
      }



    // Get a list of all employees
    handleList(req, res, params) {
        res.write(JSON.stringify(this.employees));
        res.end();
    }

    // Get a single employee
    handleGet(req, res, params) {
        var employee = this._getEmployee(params[0], res);
        if (!employee) {
            return;
        }
        res.write(JSON.stringify(employee));
        res.end();
    }

    // Delete an employee
    handleDelete(req, res, params) {
        var employee = this._getEmployee(params[0], res);
        if (!employee) {
            return;
        }
        this.employees = this.employees.filter(dept => emp.id != employee.id);
        res.end();
    }

    // Update an employee
    handleUpdate(req, res, params) {
        var empployee = this._getEmployee(params[0], res);
        if (!empployee) {
            return;
        }
        this.employees = this.employees.map(emp => {
            return emp.id != employee.id ? emp : { id: emp.id, name: unescape(params[1]) };
        });
        res.write(JSON.stringify(this.employees.find(emp => emp.id === employee.id)));
        res.end();
    }

    // Find an employee by its ID string
    _getEmployee(employeeIdStr, res) {
        var employeeId = parseInt(employeeIdStr);
        var employee = this.employees.find(emp => emp.id === employeeId);
        if (!employee) {
            res.writeHead(404, 'Not found');
            res.end()
            return null;
        }
        return employee;
    }

}

module.exports = EmployeeManager;
