/*Para saber que funciona, se ha optado por dejar "/edit", pero la ruta correcta será "/edit/:id"
que es cuando consigamos el id de la carta*/

//What we require?
const express = require('express');
const router = express.Router();

/////////////////////////////////////////////////////////////////////////////////
//Require model
const Project = require("../../models/project");
const Card = require("../../models/card");
const User = require("../../models/user");

const userIsLoggedIn = require("../../middlewares/auth-mid").userIsLoggedIn
router.use((req, res, next)=> userIsLoggedIn(req, res, next));

//shortcut = /private/cards

// GET create /cards
router.get('/create', async (req, res, next) => {
	// const cardId = req.params.id;
	// const card = await Card.findById(cardId);
	//Acceder a la url private/cards/create
	const userId = req.session.currentUser._id;
	res.render('private/card/create.hbs', {
		userId
	});

});

// POST create /cards (form)
router.post('/create/:id', async (req, res, next) => {
	const user = req.params.id;
	try {
		//console.log(req.body);
		const {
			description
		} = req.body;
		const newCard =
			await new Card({
				description,
				userId: user
			}).save(); //save the new object created to DB
		await User.findByIdAndUpdate(req.session.currentUser._id, {
			$push: {
				cards: newCard._id
			}
		})
		res.redirect('/private/user');
	} catch {
		res.render('card/create.hbs');
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
router.post('/:id/delete', async (req, res, next) => {
	//console.log("id de la card: ", req.params);
	//const {id} = req.params;
	//	console.log("id de la card 2: ", {id});
	//	//console.log("id de la card: ", id);
	try {
		const id = req.params.id;
		await Card.findOneAndDelete(id);
		res.redirect('/private/user');
	} catch(error) {
		next(error);
	}
});


//// GET edit /cards (details)
//router.get('/:_id/edit', async (req, res, next) => {
//	//Para comprobar si funciona la ruta, solo hay que poner /edit en vez de /:_id/edit
//	res.render('private/card/edit', card);
//});



module.exports = router;