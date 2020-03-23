var express = require('express');
var router = express.Router();

const Card = require('../models/Card')
const Project = require('../models/Project')
const User = require('../models/User')

//shorcut -> /random

// function randomData(array) {
//     const random = Math.floor(Math.random() * array.length);
//     console.log("kejfhjdbkj", array[random])
//     return array[random];
// }

router.get("/", (req, res, next) => {
    Card.find() 
    .then(data => {
        console.log(data)
        const random = Math.floor(Math.random() * data.length);
        console.log("kjhgkrhtg*******", data[random]);
        res.render("random.hbs", {data: data[random]});
    })
    .catch(err => console.log(err));
})

const userIsLoggedIn = require("../middlewares/auth-mid").userIsLoggedIn
router.use((req, res, next)=> userIsLoggedIn(req, res, next));

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
    delete req.session.currentUser;
    res.redirect("/");
});

module.exports = router;