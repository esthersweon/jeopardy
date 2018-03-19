# Jeopardy

A full-stack JavaScript web application (React/ Node/ Postgres stack) that follows the lead of America's Favorite Quiz Show and allows users to build and customize their own Jeopardy game! Use for game night with friends, classroom review with students, or even self-study.

Deployed application can be found on Heroku [here](https://jeopardy-frontend.herokuapp.com/).

## Installation

Go to the Jeopardy back-end app [here](https://github.com/esthersweon/jeopardy-backend) and follow the instructions for local development.

After you have the back-end server running locally, run the front-end server using the following commands: 

```zsh
git clone https://github.com/esthersweon/jeopardy.git
cd jeopardy/
npm install
npm start
```

Go to localhost:3000 to see your app.

## Tech Stack
Front-End
- React
- React Router
- Redux
- `dotenv`

Back-End
- Node
- Express
- `body-parser`
- `dotenv`
- Sequelize (Postgres ORM)
- PostgreSQL

## Deployment
- Front-end Heroku app [here](https://jeopardy-frontend.herokuapp.com/)
- Back-end Heroku app [here](https://jeopardy-backend.herokuapp.com/)