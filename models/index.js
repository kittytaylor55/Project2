const User = require('./User');
const Exercise = require('./Exercise');
const Workout = require('./workout');

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
module.exports = { User, Workout, Exercise };
