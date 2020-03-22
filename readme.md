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
        │   │   └── hamburguer.js
        │   └── stylesheets
        │       └── style.css
        ├── routes
        │   ├── index.js
        │   ├── random.js
        │   ├── auth.js
        │   └── private
        │       ├── cards.js
        │       └── projects.js
        │
        └── views
            ├── partials
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

| **Method** | **Route**                       | **Description**                                                 | Request  - Body                                          |
| ---------- | ------------------------------- | ------------------------------------------------------------    | -------------------------------------------------------- |
| `GET`      | `/`                             | Main page route. Renders home `index` view.                     |                                                          |
| `GET`      | `/login`                        | Renders `login` form view.                                      |                                                          |
| `POST`     | `/login`                        | Sends Login form data to the server.                            | { username, password }                                   |
| `GET`      | `/signup`                       | Renders `signup` form view.                                     |                                                          |
| `POST`     | `/signup`                       | Sends SignUp info to the server and creates user in the DB.     | { name, company, email, password }                       |
| `GET`      | `/random`                       | Renders to the random card page                                 |                                                          |
| `GET`      | `/user`                         | Priv route. Renders `user` view.                                |                                                          |
| `POST`     | `/user`                         | Priv route. Sends edit profile info to server, updates DB.      |                                                          |
| `GET`      | `/card/edit/`                   | Priv route. Renders `edit cards` form.                          |                                                          |
| `PUT`      | `/card/edit/:_id`               | Priv route. Sends edit cards info to server, updates DB.        | { cardname, description }                                |
| `GET`      | `/project/edit/`                | Priv route. Renders `edit projects` form.                       |                                                          |
| `PUT`      | `/project/edit/:_id`            | Priv route. Sends edit projects info to server, updates DB.     | { projectname, company, description }                    |
| `GET`      | `/card/create/`                 | Priv route. Renders `create cards` form.                        |                                                          |
| `POST`     | `/card/create/`                 | Priv route. Sends new cards info to server, updates DB.         | { type, cardname, description }                          |
| `GET`      | `/project/create/`              | Priv route. Renders `create projects` form.                     |                                                          |
| `POST`     | `/project/create/:_id`          | Priv route. Sends new projects info to server, updates DB.      | { projectname, company, description}                     |
| `DELETE`   | `/project`                      | Priv route. Deletes the user project from the DB.               |                                                          |
| `DELETE`   | `/card`                         | Priv route. Deletes the user card from the DB.                  |                                                          |
| `GET`      | `/logout`                       | Priv route. Destroy current session. Renders home `index` view. |                                                          |

## Models

* User model
````
  {
    name: {String, required: true, unique: true},
    email: {String, required: true, unique: true},
    password: {String, required: true, unique: true},
    image: {String, default: 'logo-devign-green-50px.png'},
    projects: [projectsId],
    cards: [cardsId]
  }
````
* Project model
````
  {
    name: {String, required: true, unique: true},
    card: {cardId},
    description: String
  }
````
* Card model
````
  {
    user: {userId},
    type: {String, value: ['A', 'B', 'C']}
    title: String,
    description: String
  }
````

## Links
### GitHub

https://github.com/AmaliaGlez/devign

### Trello

https://trello.com/b/vowe9aY5/devign-developdesign

## References
````
https://www.trytriggers.com/
https://cardsagainsthumanity.com/
````