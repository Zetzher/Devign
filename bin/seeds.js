const mongoose = require('mongoose');
const Card = require('../models/card');
const Project = require('../models/project');
const User = require('../models/user');

const dbName = 'devign-project';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });
Card.collection.drop();
Project.collection.drop();
User.collection.drop();

const cards = [

    {
        description: 'Tu a Frontend y yo a UX',
        type: 'A',
        userId:
    },

    {
        description: 'Soy Backman!',
        type: 'A',
        userId:
    },

    {
        description: 'En un loop de cuyo código no quiero acordarme...',
        type: 'A',
        userId:
    },

    {
        description: 'Todas las routes llevan a Back',
        type: 'A',
        userId:
    },

    {
        description: 'Stash in there!',
        type: 'A',
        userId:
    },

    {
        description: 'Todo lo que alcanza la vista, es css',
        type: 'A',
        userId:
    },

    {
        description: 'Console.log, príntalos todos!',
        type: 'A',
        userId:
    },

    {
        description: 'Yes, we run!',
        type: 'A',
        userId:
    },

    {
        description: 'Si entras en bucle tómate un break, luego continue y return',
        type: 'A',
        userId:
    },

    {
        description: 'Cuando haces break, ya no hay constinue',
        type: 'A',
        userId:
    },

    {
        description: 'Zoom, zoom, zoom!',
        type: 'A',
        userId:
    },

    {
        description: 'Hold the DOM!!!',
        type: 'A',
        userId:
    },

    {
        description: 'Soy Aragorn extend de Araghorn new de Islidur, class de los Dunedain',
        type: 'A',
        userId:
    },

    {
        description: 'Lo juro por los ES7 nuevos y viejos',
        type: 'A',
        userId:
    },

    {
        description: 'Avatar',
        type: 'A',
        userId:
    },

    {
        description: 'Pero... ¿Te funciona?',
        type: 'A',
        userId:
    },

    {
        description: 'El pájaro sin alas y la función sin semicolon',
        type: 'A',
        userId:
    },

    {
        description: '¡No me importa si funciona en tu máquina! !No estamos vendiendo tu máquina!',
        type: 'A',
        userId:
    },

    {
        description: 'Iterar es humano, "recursivar" es divino',
        type: 'A',
        userId:
    },

    {
        description: 'Somos Microsoft. La resistencia es inútil. Serás absorbido.',
        type: 'A',
        userId:
    },

    {
        description: '¿Y si empiezas por tu back y terminamos por el front? Menos rutina!',
        type: 'A',
        userId:
    },

    {
        description: 'Unexpected',
        type: 'A',
        userId:
    },

    {
        description: 'Ooh look at him... It"s a bug!',
        type: 'A',
        userId:
    },

    {
        description: 'El software es como el sexo, mejor si es libre y gratis',
        type: 'A',
        userId:
    },

    {
        description: 'Solo hay dos clases de lenguaje de programación: aquellos de los que están siempre quejándose, y aquellos que nadie usa',
        type: 'A',
        userId:
    },

    {
        description: 'No te preocupes si no funciona bien. Si todo estuviera correcto, serías despedido de tu trabajo',
        type: 'A',
        userId:
    },

    {
        description: 'Programar es el arte de crear errores en documentos de texto vacío',
        type: 'A',
        userId:
    },

    {
        description: 'Decir que Java es estupendo porque funciona con todos los sistemas operativos, es como decir que el sexo anal es estupendo porque funciona con todos los géneros',
        type: 'A',
        userId:
    },

    {
        description: 'Un programador tiene un problema y decide usar expresiones regulares; ahora tiene dos problemas',
        type: 'A',
        userId:
    }

]

Card.create(cards, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${cards.length} cards`)
  mongoose.connection.close();
});