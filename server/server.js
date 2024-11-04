const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql').graphqlHTTP
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"] 
}

app.use(cors(corsOptions))

// Replace with your Mongo Atlas URI
const MONGO_URI = 'mongodb+srv://steki632211:hSNMkYt7QqboP2b3@testdb.q0gqqgv.mongodb.net/?retryWrites=true&w=majority&appName=testdb';
if (!MONGO_URI) {
  throw new Error('You must provide a Mongo Atlas URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to Mongo Atlas instance.'))
  .on('error', (error) =>
    console.log('Error connecting to Mongo Atlas:', error)
  );

app.use(bodyParser.json());
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("server started at 4000")
})
