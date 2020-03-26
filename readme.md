# Devign (Develop&Design)
## Description

Do you need help with your ideas? 
We can make the process a little bit easier for you.

Devign is here as a tool to help with development ideas.

We introduce the first collection designed for web development.

## User Stories

* Sign-up
* Log-in
* Log-out
* Home page
* Random cards
* CRUD cards
* CRUD projects
* Edit profile 

## MVP

* CRUD
* Sign-up / Log-in / Log-out
* Private pages
* Two models relationed

## Backlog

* Animations
* More types of cards
* Save cards on favourite folder
* Responsive
* Customize bugs

## Tech challenge

* Work on GitHub as a team
* CRUD
* Work with database

## Structure
```
devign-project/
        ├── .gitignore
        ├── .env
        ├── app.js
        ├── readme.md
        ├── bin
        │   ├── seeds.js
        │   └── www
        ├── config
        │   └── cloudinary.js
        ├── middlewares
        │   └── auth-mid.js
        ├── models
        │   ├── card.js
        │   ├── project.js
        │   └── user.js
        ├── public
        │   ├── images
        │   ├── scripts
        │   └── stylesheets
        ├── routes
        │   ├── index.js
        │   ├── random.js
        │   ├── auth.js
        │   └── private
        │       ├── user.js
        │       ├── cards.js
        │       └── projects.js
        │
        └── views
            ├── error.hbs
            ├── index.hbs
            ├── layout.hbs
            ├── random.hbs
            ├── auth
            │   ├── login.hbs
            │   └── signup.hbs
            └── private
                ├── user.hbs
                ├── card
                │   ├── create.hbs
                │   └── edit.hbs
                └── project
                    ├── create.hbs
                    └── edit.hbs
```
## Routes

| **Method** | **Route**                   | **Description**                                                 | Request  - Body                                |
| ---------- | ----------------------------| ------------------------------------------------------------    | -----------------------------------------------|
| `GET`      | `/`                         | Main page route. Renders home `index` view.                     |                                                |
| `GET`      | `/login`                    | Renders `login` form view.                                      |                                                |
| `POST`     | `/login`                    | Sends Login form data to the server.                            | { username, password }                         |
| `GET`      | `/signup`                   | Renders `signup` form view.                                     |                                                |
| `POST`     | `/signup`                   | Sends SignUp info to the server and creates user in the DB.     | { name, email, password }                      |
| `GET`      | `/random`                   | Renders to the random card page                                 |                                                |
| `GET`      | `/user`                     | Priv route. Renders `user` view and list projects and cards     |                                                |
| `GET`      | `/project/create/`          | Priv route. Renders `create projects` form.                     |                                                |
| `POST`     | `/project/create/:_id`      | Priv route. Sends new projects info to server, updates DB.      | { projectname, description}                    |
| `GET`      | `/project/edit/`            | Priv route. Renders `edit projects` form.                       |                                                |
| `PUT`      | `/project/edit/:_id`        | Priv route. Sends edit projects info to server, updates DB.     | { projectname, description }                   |
| `POST`     | `/card/create/`             | Priv route. Sends new cards info to server, updates DB.         | { description }                                |
| `GET`      | `/card/create/`             | Priv route. Renders `create cards` form.                        |                                                |
| `DELETE`   | `/projects`                 | Priv route. Deletes user project from DB.                       |                                                |
| `DELETE`   | `/cards`                    | Priv route. Deletes user card from DB.                          |                                                |
| `GET`      | `/logout`                   | Priv route. Destroy current session. Renders home `index` view. |                                                |

## Models

* User model
````
  {
    username: String,
    email: String,
    password: String,
    imgPath: { type: String, default: '/images/profile-default.png' },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
  }
````
* Project model
````
  {
    title: { type: String, required: true, unique: true },
    description: String,
    card: { type: Schema.Types.ObjectId, ref: 'Card' }
  }
````
* Card model
````
  {
    description: { type: String, unique: true, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
  }
````

## Links
### GitHub

https://github.com/AmaliaGlez/devign

### Heroku

https://devign-develop-design.herokuapp.com/

### Trello

https://trello.com/b/vowe9aY5/devign-developdesign

## References
````
https://www.trytriggers.com/
https://cardsagainsthumanity.com/
````