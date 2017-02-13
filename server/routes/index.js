var authors = require('../controllers/departments'),
  books = require('../controllers/employees');

module.exports = function (router) {
  router.get('/departments', departments.index);
  router.get('/departments/:id', departments.show);
  router.post('/departments', departments.create);
  router.put('/departments', departments.update);
  router.delete('/departments/:id', departments.delete);

  router.get('/employees', employees.index);
  router.get('/employees/:id', employees.show);
  router.post('/employees', employees.create);
  router.put('/employees/:id', employees.update);
  router.delete('/employees/:id', employees.delete);

  return router
};
