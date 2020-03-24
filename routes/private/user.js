//What we require?
const express = require('express');
const router = express.Router();

const User = require("../../models/user");

// const userIsLoggedIn = require("../middlewares/auth-mid").userIsLoggedIn
// router.use((req, res, next)=> userIsLoggedIn(req, res, next));

//Shorcut -> /private/user

router.get('/', (req, res, next) => {
	//	console.log("current user", req.session.currentUser)

	const user = req.session.currentUser;

	User.findById(req.session.currentUser._id)
		.populate('projects')
		.populate('cards')
		.exec((err, user) => {
			if (err) {
			  next(err);
			  return;
			}
		
			res.render('private/user.hbs', {
				user: user
			});
		})

});
//const card = await Card.findById(cardId);



module.exports = router;