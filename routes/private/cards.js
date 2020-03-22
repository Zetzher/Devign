/*Para saber que funciona, se ha optado por dejar "/edit", pero la ruta correcta será "/edit/:id"
que es cuando consigamos el id de la carta*/

//What we require?
const express = require('express');
const router = express.Router();

/////////////////////////////////////////////////////////////////////////////////
//Require model
const Card = require("../../models/Card");

/////////////////////////////////////////////////////////////////////////////////



// GET private/user
//router.get('/create', /*async*/ (req, res, next) => {
    
    
  //  res.render("private/card/create")
    /*try {
		const cards = await Card.find(); //save in const the model
		res.render('user', {
			cards
		}); //('view route', {object DB})
	} catch (error) {
		next(error);
	}*/
//});

//shortcut = /private/cards

// GET create /cards
router.get('/create',  (req, res, next) => {
    
    //Acceder a la url private/cards/create

		res.render('private/card/create.hbs');
	
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
router.post('/:_id/delete', async (req, res, next) => {
	
});

// GET edit /cards (details)
router.get('/:_id/edit', async (req, res, next) => {
	//Para comprobar si funciona la ruta, solo hay que poner /edit en vez de /:_id/edit
		res.render('private/card/edit', card);
});



module.exports = router;

