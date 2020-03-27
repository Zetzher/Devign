//What we require?
const express = require('express');
const router = express.Router();
const uploadCloud = require('../../config/cloudinary.js');

const User = require("../../models/user");

const userIsLoggedIn = require("../../middlewares/auth-mid").userIsLoggedIn
router.use((req, res, next) => userIsLoggedIn(req, res, next));

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

router.post('/', uploadCloud.single('photo'),  (req, res, next) => {
	

	if(req.file){
		const imgPath = req.file.url;
		
	 User.findByIdAndUpdate(req.session.currentUser._id, { imgPath: imgPath })
		.then(user => {
			res.redirect('/private/user');
		})
		.catch(error => {
			console.log(error);
		});
	} else {
		res.redirect('/private/user')
	}
});

// router.post('/:id/edit-profile',uploadCloud.single('picture'), async (req, res, next) => {
//     const { name, email, direction} = req.body;
//     const profilePicture = req.file ? req.file.secure_url : req.session.currentUser.picture;
//     //console.log(req.file);
//     await User.update({_id: req.params.id}, {name, email, direction, picture: profilePicture},{new:true})
//     res.redirect('/profile');
// });

module.exports = router;