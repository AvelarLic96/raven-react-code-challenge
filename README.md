# RAVN REACT CODE CHALLENGE

# Clear Setup/Running instructions.

## npm install

Execute **npm install** or **npm install --legacy-peer-deps** if needed

## npm start or npm run start

Run a **npm start** or **npm run start**

## Create .env file

Create a .env file in the root directory, create a new variable as **REACT_APP_GRAPHQL_TOKEN** with the token as value.

# Project description

A React application using GraphQl to view, add and delete a task, before adding a task you need to select differents required fields and then you will be able to add a new task.

# Screenshots of the application
<img width="1512" alt="image" src="https://github.com/AvelarLic96/ravn-react-code-challenge/assets/8432985/1a57a96b-c765-4ea6-bca9-cefa7458c428">

<img width="1512" alt="image" src="https://github.com/AvelarLic96/ravn-react-code-challenge/assets/8432985/2489d354-89d7-4868-afd6-86022d6cfe6a">

# Decisions

Is readable and easy to understand as basic react folder structure:

* Components
* Assets
* Pages
* Graphql queries and mutations
* Helper functions
* Context provider
* Utilities

In components I wanted to reuse some components so I adapted them to be more reusable, I use a layout to wrap the hole page so is more easy to change from one page to another.

I used context to handle global state.

I had not worked with graphql too much but was a amazing challenge learn more about it I tried to do my best and organized the logic as I found by myself.

Tailwind was an easy and fast way to apply styles to react.

# Technologies/libraries used

* "@apollo/client": "^3.8.7"
* "graphql": "^16.8.1"
* "lodash.debounce": "^4.0.8"
* "moment": "^2.29.4"
* "react": "^18.2.0"
* "react-datepicker": "^4.23.0"
* "react-dom": "^18.2.0"
* "react-modal": "^3.16.1"
* "react-router-dom": "^6.20.0"
* "react-scripts": "5.0.1"
* "typescript": "^4.9.5"
* "words-to-numbers": "^1.5.1"
