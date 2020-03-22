var express = require('express');
var router = express.Router();

const Card = require('../models/Card')
const Project = require('../models/Project')
const User = require('../models/User')

router.get("/random", (req, res, next) => {
    // para el boton, necesario? (ya hay link a la misma pagina en hbs del boton)
    res.render("random", {errorMessage: ''});
})

// Después de esta ruta ponemos los botones de guardar y crear para que no los deje acceder y redirijan al usuario al login
// router.use((req, res, next) => {
//     if (req.session.currentUser) {
//       next();
//       return;
//     }
//     res.redirect('/login');
// });

// const userIsLoggedIn = require("../middlewares/auth-mid").userIsLoggedIn
// router.use((req, res, next)=> userIsLoggedIn(req, res, next));

router.get("/project/create", (req, res, next) => {
    res.render("project/create");
})

router.post("/project/create", async (req, res, next) => {
    // const {projectname, description} = req.body;
    // const newProject = await Project.create({projectname, description});
    // const userId = req.session.currentUser._id;
    // const cardId = req.body.Card._id

    // await User.updateOne({_id: userId}, {$push: {projectNew: cardId, newProject._id}})
    
    res.render("project/create", {message:"Project created successfully!"})

});

router.post("/logout", (req, res, next) => {
    //delete req.session.currentUser;
    res.redirect("/");
});

module.exports = router;