# Devign (Develop&Design)
## Description

Do you need help with your ideas? 
We can make the process a little bit easier for you.

Devign is here as a tool to help with development ideas.

We introduce the first collection designed for web development.

## User Stories

* Sign-up:
* Log-in:
* Log-out:
* Home page:
* Random cards:
* CRUD cards:
* CRUD projects:
* Edit profile: 
 
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
        ├── package.json
        ├── bin
        │   ├── seeds.js
        │   └── www
        ├── config
        │   └── cloudinary.js
        ├── models
        │   ├── card.js
        │   ├── project.js
        │   └── user.js
        ├── public
        │   ├── images
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

| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | { name, company, email, password }                       |
| `GET`      | `/user`                            | Private route. Renders `user` view.                          |                                                          |
| `GET`      | `card/edit/`                       | Private route.                                               |                                                          |
| `PUT`      | `card/edit/:_id`                   | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `project/edit/`                    | Private route.                                               |                                                          |
| `PUT`      | `project/edit/:_id`                | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `card/create/`                     | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `POST`     | `card/create/`                     | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `project/create/`                  | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `POST`     | `project/create/:_id`              | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `/favorites`                       | Private route. Render the `favorites` view.                  |                                                          |
| `POST`     | `/favorites/`                      | Private route. Adds a new favorite for the current user.     | { name, cuisine, city, }                                 |
| `DELETE`   | `/favorites/:restaurantId`         | Private route. Deletes the existing favorite from the current user. |                                                          |
| `GET`      | `/restaurants`                     | Renders `restaurant-list` view.                              |                                                          |
| `GET`      | `/restaurants/details/:id`         | Render `restaurant-details` view for the particular restaurant. | 

## Links
### GitHub
(URL)
### Trello

https://trello.com/b/vowe9aY5/devign-developdesign

## References

https://www.trytriggers.com/
https://cardsagainsthumanity.com/
