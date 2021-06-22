const user = require('./user');
const muscle = require('./muscle');
const exercise = require('./exercise');
const workout = require('./workout');

user.hasMany(workouts, {
  foreignKey: 'user_id',
 
});

exercise.hasMany(workouts, {
  foreignKey: 'user_id', 
});

workout.belongsTo(exercise, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

workout.belongsTo(user, {
  foreignKey: 'user_id'
});

muscle.hasMany(exercise, {
  foreignKey: 'exercise_id'
});

exercise.belongsTo(muscles, {
  foreignKey: 'exercise_id'
});

module.exports = { User };
