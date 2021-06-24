// redirect to home-login route if user is not signed in
const checkAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = checkAuth;
