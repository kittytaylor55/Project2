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

// GET /api/users/1
// router.get('/:id', (req, res) => {
//   User.findOne({
//     attributes: { exclude: ['password'] },
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbUserData) => {
//       if (!dbUserData) {
//         res.status(404).json({ message: 'No user found with this id' });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
// router.get('/profile', (req, res) => {

//   res.render('profile', { loggedIn: req.session.loggedIn });
//   // console.log(user);
// });

//route for generating random workout page
router.get('/workout', checkAuth, async (req, res) => {
  try {
    // const workoutData = await Exercise.findByPk();

    // res.render('workout', { variable, loggedIn: true });
    res.render('workout');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
