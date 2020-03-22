/*Para saber que funciona, se ha optado por dejar "/edit", pero la ruta correcta será "/edit/:id"
que es cuando consigamos el id de la carta*/

//What we require?
const express = require('express');
const router = express.Router();

/////////////////////////////////////////////////////////////////////////////////
//Require model
const Card = require("../../models/card");

/////////////////////////////////////////////////////////////////////////////////

// GET private/user
router.get('/', async (req, res, next) => {
	try {
		const cards = await Card.find(); //save in const the model
		res.render('user', {
			cards
		}); //('view route', {object DB})
	} catch (error) {
		next(error);
	}
});

// GET create /cards
router.get('/create', async (req, res, next) => {
	try {
		res.render('card/create');
	} catch (error) {
		next(error);
	}
});

// POST create /cards (form)
router.post('/create', async (req, res, next) => {
	try {
		//console.log(req.body);
		const {
			title,
			description,
			card
		} = req.body;
		await new Card({
			title,
			description,
			card
		}).save(); //save the new object created to DB
		res.redirect('/cards');
	} catch {
		res.render('card/create');
	}
});

// GET :id /cards (details)
/*router.get('/:_id', async (req, res, next) => {
	try {
		const card = await Card.findOne(req.params);
		res.render('card/show', card);
	} catch (error) {
		next(error);
	}
});*/

// POST delete /cards
router.post('/:_id/delete', async (req, res, next) => {
	try {
		const id = req.params;
		console.log(id);
		await Card.findOneAndDelete(id);
		res.redirect('/cards');
	} catch (error) {
		next(error);
	}
});

// GET edit /cards (details)
router.get('/:_id/edit', async (req, res, next) => {
	try {
		const card = await Card.findOne(req.params);
		res.render('card/edit', card);
	} catch (error) {
		next(error);
	}
});

// POST edit /cards (form)
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
		await Card.update({
			_id: id //condición para encontrarlo
		}, {
			$set: { //se entregan los nuevos valores
				title,
				description
			}
		});
		res.redirect('/cards');
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;

module.exports = router;

