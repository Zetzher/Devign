var express = require('express');
var router = express.Router();

// Rutas de editar y crear cartas (privada)

//Ruta para conectar a card/create.hbs

router.get("/create", (req, res, next) =>

res.render("private/card/create")
)



//Ruta para conectar a card/edit.hbs

/*Para saber que funciona, se ha optado por dejar "/edit", pero la ruta correcta será "/edit/:id"
que es cuando consigamos el id de la carta*/
router.get("/edit", (req, res, next) =>

res.render("private/card/edit")
)

module.exports = router;

