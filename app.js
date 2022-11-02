const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./server/schema/schema');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DataBase Connected Successfully'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(2000, () => {
  console.log('App running on port 2000');
});
