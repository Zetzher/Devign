//What we require?
const express = require('express');
const router = express.Router();

/////////////////////////////////////////////////////////////////////////////////
//Require model
const Project = require("../../models/project");
const Card = require("../../models/card");
const User = require("../../models/user");

// const userIsLoggedIn = require("../middlewares/auth-mid").userIsLoggedIn
// router.use((req, res, next)=> userIsLoggedIn(req, res, next));

//shorcut -> /private/projects

// GET create /projects
router.get('/random/create/:id', async (req, res, next) => {
	//console.log("ruta geeeeeet", req.params);
		const cardId = req.params.id;
		const card = await Card.findById(cardId); 
		

		res.render('private/project/create.hbs', {card});
});



// POST create /projects (form)
router.post('/create/:id', async (req, res, next) => {
	//console.log("poooost ************", req.params.id);
	const cardId = req.params.id
	try {
		const {
			title,
			description,
		} = req.body;
		const newProject=
		await new Project({
			title,
			description,
			card: cardId
		}).save(); //save the new object created to DB
		await User.findByIdAndUpdate(req.session.currentUser._id, {$push: {projects: newProject._id}})
		res.redirect('/private/user');
	} catch (error){ 
		console.log(error)
		//res.render('private/project/create.hbs');
	}
});


//Necesitamos que el proyecto se vincule al usuario.

// GET :id /projects (details)
/*router.get('/:_id', async (req, res, next) => {
	try {
		const project = await Project.findOne(req.params);
		res.render('project/show', project);
	} catch (error) {
		next(error);
	}
});*/

// POST delete /projects
router.post('/:_id/delete', async (req, res, next) => {
	try {
		const id = req.params;
		//console.log(id);
		await Project.findOneAndDelete(id);
		res.redirect('/projects');
	} catch (error) {
		next(error);
	}
});

// GET edit /projects (details)
router.get('/:_id/edit', async (req, res, next) => {
	try {
		const project = await Project.findOne(req.params);
		res.render('project/edit.hbs', project);
	} catch (error) {
		next(error);
	}
});

// POST edit /projects (form)
router.post('/:_id/', async (req, res, next) => {
	try {
		//console.log(req.body);
		const {
			id,
			title,
			description,
			card
		} = req.body;
		//console.log(id);
		await Project.update({
			_id: id //condición para encontrarlo
		}, {
			$set: { //se entregan los nuevos valores
				title,
				description
			}
		});
		res.redirect('/projects');
	} catch (error) {
		//console.log(error);
	}
});

module.exports = router;