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

//route for loading profile page
router.get('/profile', checkAuth, async (req, res) => {
  try {
    const profileData = await User.findAll({
      where: { id: req.session.id },
    });

    if (!profileData) {
      res.status(404).json({ message: 'No profile with ID found' });
      return;
    }

    const profile = profileData.map((user) => user.get({ plain: true }));

    res.render('profile', { profile, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
