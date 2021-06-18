const router = require('express').Router();
// import models here

//route for loading main page
router.get('/', async (req, res) => {
  try {
    // res.render('home page')
  } catch (err) {
    res.status(500).json(err);
  }
});

//route for loading profile page
router.get('/profile', async (req, res) => {
  try {
    res.render(/*enter handelbars page here */);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get login page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect(/* enter handelbars page here*/);
    return;
  }

  res.render('login');
});

module.exports = router;
