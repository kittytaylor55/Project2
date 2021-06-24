const User = require('./User');
const Muscle = require('./Muscle');
const Exercise = require('./Exercise');
const Workout = require('./Workout');

User.hasMany(Workout, {
  foreignKey: 'user_id',
});

Exercise.hasMany(Workout, {
  foreignKey: 'user_id',
});

Workout.belongsTo(Exercise, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Workout.belongsTo(User, {

  foreignKey: 'user_id',
});

Muscle.hasMany(Exercise, {
  foreignKey: 'exercise_id',
});

Exercise.belongsTo(Muscle, {
  foreignKey: 'exercise_id',
});

module.exports = { User, Workout, Muscle, Exercise };
