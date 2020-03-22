//What we require?
const express = require('express');
const router = express.Router();

/////////////////////////////////////////////////////////////////////////////////
//Require model
const Project = require("../../models/project");

/////////////////////////////////////////////////////////////////////////////////

// GET private/user
router.get('/', async (req, res, next) => {
	try {
		const projects = await Project.find(); //save in const the model
		res.render('user', {
			projects
		}); //('view route', {object DB})
	} catch (error) {
		next(error);
	}
});

// GET create /projects
router.get('random/:_id/create', async (req, res, next) => {
	try {
		const id = req.params;
		await Project.//AÑADIR EL METHOD PERTINENTE PARA GUARDAR LA ID
		res.render('project/create');
	} catch (error) {
		next(error);
	}
});

// POST create /projects (form)
router.post('/create', async (req, res, next) => {
	try {
		//console.log(req.body);
		const {
			title,
			description,
			card
		} = req.body;
		await new Project({
			title,
			description,
			card
		}).save(); //save the new object created to DB
		res.redirect('/projects');
	} catch {
		res.render('project/create');
	}
});

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
		console.log(id);
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
		res.render('project/edit', project);
	} catch (error) {
		next(error);
	}
});

// POST edit /projects (form)
router.post('/:_id/', async (req, res, next) => {
	try {
		console.log(req.body);
		const {
			id,
			title,
			description,
			card
		} = req.body;
		console.log(id);
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
		console.log(error);
	}
});

module.exports = router;