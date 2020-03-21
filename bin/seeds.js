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
        /*cada carta con sus keys y values*/
    },

    {
        /*cada carta con sus keys y values*/
    },

    {
        /*cada carta con sus keys y values*/
    },

    {
        /*cada carta con sus keys y values*/
    },

    {
        /*cada carta con sus keys y values*/
    },

    {
        /*cada carta con sus keys y values*/
    },

    {
        /*cada carta con sus keys y values*/
    },

    {
        /*cada carta con sus keys y values*/
    },

    {
        /*cada carta con sus keys y values*/
    }

]

Card.create(cards, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${cards.length} cards`)
  mongoose.connection.close();
});