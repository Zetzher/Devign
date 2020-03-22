//What we require?
const express = require('express');
const router = express.Router();

/////////////////////////////////////////////////////////////////////////////////
//Require model
const User = require("../../models/User");

/////////////////////////////////////////////////////////////////////////////////

//Pensar quien hace esto
//Shorcut -> /private/user
// GET private/user
router.get('/', (req, res, next) => {

		//const projects = Project.find(); //save in const the model*/
		res.render('private/user.hbs'); //('view route', {object DB})
	//catch (error) {
	//next(error);
	
});

module.exports = router;