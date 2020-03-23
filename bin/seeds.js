const mongoose = require('mongoose');
const Card = require('../models/Card');
const Project = require('../models/Project');
const User = require('../models/User');

const dbName = 'devign-project';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });
Card.collection.drop();
Project.collection.drop();
User.collection.drop();

const cards = [

    {
        description: 'Tu a Frontend y yo a UX',
        type: 'A',
    },

    {
        description: 'Soy Backman!',
        type: 'A',
    },

    {
        description: 'En un loop de cuyo código no quiero acordarme...',
        type: 'A',
    },

    {
        description: 'Todas las routes llevan a Back',
        type: 'A',
    },

    {
        description: 'Stash in there!',
        type: 'A',
    },

    {
        description: 'Todo lo que alcanza la vista, es css',
        type: 'A',
    },

    {
        description: 'Console.log, príntalos todos!',
        type: 'A',
    },

    {
        description: 'Yes, we run!',
        type: 'A',
    },

    {
        description: 'Si entras en bucle tómate un break, luego continue y return',
        type: 'A',
    },

    {
        description: 'Cuando haces break, ya no hay continue',
        type: 'A',
    },

    {
        description: 'Zoom, zoom, zoom!',
        type: 'A',
    },

    {
        description: 'Hold the DOM!!!',
        type: 'A',
    },

    {
        description: 'Soy Aragorn extend de Arathorn new de Islidur, class de los Dunedain',
        type: 'A',
    },

    {
        description: 'Lo juro por los ES7 nuevos y viejos',
        type: 'A',
    },

    {
        description: 'Avatar',
        type: 'A',
    },

    {
        description: 'Pero... ¿Te funciona?',
        type: 'A',
    },

    {
        description: 'El pájaro sin alas y la función sin semicolon',
        type: 'A',
    },

    {
        description: '¡No me importa si funciona en tu máquina! !No estamos vendiendo tu máquina!',
        type: 'A',
    },

    {
        description: 'Iterar es humano, "recursivar" es divino',
        type: 'A',
    },

    {
        description: 'Somos Microsoft. La resistencia es inútil. Serás absorbido.',
        type: 'A',
    },

    {
        description: '¿Y si empezamos por tu back y terminamos por el front? Menos rutina!',
        type: 'A',
    },

    {
        description: 'Unexpected',
        type: 'A',
    },

    {
        description: 'Ooh look at him... It"s a bug!',
        type: 'A',
    },

    {
        description: 'El software es como el sexo, mejor si es libre y gratis',
        type: 'A',
    },

    {
        description: 'Solo hay dos clases de lenguaje de programación: aquellos de los que están siempre quejándose, y aquellos que nadie usa',
        type: 'A',
    },

    {
        description: 'No te preocupes si no funciona bien. Si todo estuviera correcto, serías despedido de tu trabajo',
        type: 'A',
    },

    {
        description: 'Programar es el arte de crear errores en documentos de texto vacío',
        type: 'A',
    },

    {
        description: 'Decir que Java es estupendo porque funciona con todos los sistemas operativos, es como decir que el sexo anal es estupendo porque funciona con todos los géneros',
        type: 'A',
    },

    {
        description: 'Un programador tiene un problema y decide usar expresiones regulares; ahora tiene dos problemas',
        type: 'A',
    }

]

Card.create(cards, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${cards.length} cards`)
  mongoose.connection.close();
});
