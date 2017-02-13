module.exports = {
	development: {
  	url: 'postgres://postgres:password@localhost:5432/crud',
  	dialect: 'postgres'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: true
    },
  },
  staging: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: true
    }
  },
  test: {
    url: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/crud_test',
    dialect: 'postgres',
    logging: false
  }
};
