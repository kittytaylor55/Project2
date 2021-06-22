const router = require('express').Router();

// import models here

//route for loading main page
router.get('/', async (req, res) => {
  try {
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});

//route for loading profile page
router.get('/profile', async (req, res) => {
  try {
    res.render('profile');
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get login page
router.get('/login', async (req, res) => {
  try {
    // If the user is already logged in, redirect the request to another route
    if (req.session.loggedIn) {
      res.redirect('profile');
      return;
    }
    res.render('login');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
