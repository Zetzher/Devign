//What we require?
const express = require('express');
const router = express.Router();

/////////////////////////////////////////////////////////////////////////////////
//Require model
const Project = require("../../models/Project");

/////////////////////////////////////////////////////////////////////////////////

//shorcut -> /private/projects

// GET create /projects
router.get('/random/create', async (req, res, next) => {
	
		res.render('private/project/create.hbs');
	
});

// POST create /projects (form)
router.post('/create', async (req, res, next) => {
	console.log("************", req.body);
	try {
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
		res.redirect('/private/user');
	} catch {
		res.render('project/create.hbs');
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
		res.render('project/edit.hbs', project);
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