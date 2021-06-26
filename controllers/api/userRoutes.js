const router = require('express').Router();
const { User } = require('../../models');

// sign up to create new user
router.post('/signup', async (req, res) => {
  try {
    const newUserData = await User.create({
      age: req.body.age,
      name: req.body.name,
      weight: req.body.weight,
      height: req.body.height,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.userId = newUserData.id;
      req.session.loggedIn = true;
      res.status(200).json(newUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password); //checkPassword defined in User model (see mini project)
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userData.id;
      req.session.name = userData.name;
      res
        .status(200)
        .json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Logout user
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
