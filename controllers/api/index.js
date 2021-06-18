const router = require('express').Router();
//refers to userRoutes.js file in this folder
const userRoutes = require('./userRoutes');

//if another api route file is decided to be made, use template below
//const fitnessRoutes = require( `file path here` );
//router.use('/projects', fitnessRoutes);

router.use('/users', userRoutes);

module.exports = router;
