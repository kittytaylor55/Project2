console.log('hello');
const sequelize = require('../config/connection');
const { Exercise, User } = require('../models');
const exercise = require('./exercise.json');
const userData = require('./userData.json');

const seedDataBase = async () => {
  await sequelize.sync({
    force: true,
  });
  const seedUsers = () =>
    User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

  const seedExercises = () => Exercise.bulkCreate(exercise);

  console.log('on line 18');

  await seedUsers();

  await seedExercises();

  process.exit(0);
};
//console.log(sequelize, 'line 32');
seedDataBase();
