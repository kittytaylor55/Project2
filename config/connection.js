const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL); // for deploying to heroku
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME, // ENV file info
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

//added this so that it would correct the user login 
// function extendDefaultFields(defaults, session) {

//   console.log((session.passport && session.passport['user']) ? session.passport['user'] : null);

//   return {
//       data: defaults.data,
//       expires: defaults.expires,
//       userid: (session.passport && session.passport['user']) ? session.passport['user'] : null
//   };
// }

module.exports = sequelize;
