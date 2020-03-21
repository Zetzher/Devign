var express = require('express');
var router = express.Router();

// Rutas de editar y crear cartas (privada)

//Ruta para conectar a card/create.hbs

router.get("/private/card", (req, res, next) =>

res.render("card/create.hbs")
)



//Ruta para conectar a card/edit.hbs

router.get("/private/card/:id", (req, res, next) =>

res.render("card/edit.hbs")
)

module.exports = router;

