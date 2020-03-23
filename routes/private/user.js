//What we require?
const express = require('express');
const router = express.Router();

const User = require("../../models/User");

// const userIsLoggedIn = require("../middlewares/auth-mid").userIsLoggedIn
// router.use((req, res, next)=> userIsLoggedIn(req, res, next));

//Shorcut -> /private/user

router.get('/', (req, res, next) => {
	User.find()
	res.render('private/user.hbs', {user}); 
});

router.get('/:id', (req, res, next) => {

})




module.exports = router;