import Sequelize from 'sequelize';

//make path for production environment

let db = process.env.DATABASE_URL === null ? 
  new Sequelize(process.env.DATABASE_URL, {
    host: process.env.DATABASE_URL.split(':')[2],
    protocol: 'postgres',
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: false
  }) : new Sequelize('uncle', null, null, {
    host: 'localhost',
    protocol: 'postgres',
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: false
  });

db.authenticate()
  .then(err => {
    console.log('Database connection has been established');
  }, (err) => {
    console.log('Unable to connect to database: ', err);
  });

export default db;
