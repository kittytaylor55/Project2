const router = require('express').Router();
const { User, Exercise } = require('../models/index');
const checkAuth = require('../utils/auth');
// import models here

//route for loading main page with logon/sign up
router.get('/', async (req, res) => {
  try {
    // If the user is already logged in, redirect the request to another route
    if (req.session.loggedIn) {
      res.redirect('profile');
      return;
    }
    res.render('home-login');
  } catch (err) {
    res.status(500).json(err);
  }
});

// //route for loading profile page
router.get('/profile', checkAuth, async (req, res) => {
  try {
    const profileData = await User.findByPk(req.session.userId);

    if (!profileData) {
      res.status(404).json({ message: 'No profile with ID found' });
      return;
    }

    const profile = profileData.get({ plain: true });
    res.render('profile', { profile, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route for generating random workout page
router.get('/workout', checkAuth, async (req, res) => {
  try {
    const workoutData = await Exercise.findOne(req.params.id, {
      order: [Sequelize.fn('RAND')],
    });

    if (!workoutData) {
      res.status(404).json({ message: 'No workout with ID found' });
      return;
    }
    console.log(workoutData);
    const set = workoutData.get({ plain: true });
    console.log(set);

    res.render('workout', { set, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
