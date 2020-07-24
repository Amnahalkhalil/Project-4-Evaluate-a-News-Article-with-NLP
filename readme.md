# Evaluate a News Article with Natural Language Processing

This project requires you to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

## Main files of the project

- Server side: app.js
- Client side: 
  - checkUrl.js 
  - formHandler.js

## Testing

For test run `npm run test`

## How to run the project

1. Run `npm install` to install dependencies.
2. Create a new `.env` file in the root of your project.
3. Fill the .env file with your API keys like this: [ API key](https://newsapi.aylien.com/)
`
API_ID=**************************
API_KEY=**************************
`
4. Run `npm run build-dev` to create dist folder.
5. Run `npm run build-prod` to create dist folder.
5. Start the server with `npm run start`.
6. Go to [http://localhost:8081](http://localhost:8081).


## Online demo hosted on Heroku
[see a demo here](https://udacity-project--072020.herokuapp.com/)


