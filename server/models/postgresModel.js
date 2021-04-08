// We will use a pool to limit the number of connections to the postgress client at one time
const { Pool } = require('pg');
// dotenv enables us to use environmental variables from a root .env file in the project folder
// there we can securely configure our database connection settings and pass them into our application
const dotenv = require('dotenv');
dotenv.config();

// Deconstruct the Postgress connection string from the root .env file
const { PG_URI } = process.env;

// Create a new pool passing in the deconstructed connection string from our .env file
const pool = new Pool({
  connectionString: PG_URI
});

// Export our query object which returns the evaluated result of our pool.query. The query is logged before hand.
// This will enable us to require in our 
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};