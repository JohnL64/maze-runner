// Require in express and assign to app
const express = require('express');
const app = express();
// Require in cors
const cors = require('cors');

// Setup the server on PORT 3010
const PORT = 3010;

// Require in boardRouter
const apiBoardRouter = require('./routes/boardRouter');

// parsing HTML and JSON objects on any request
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to request board state from the DB
app.use('/api', apiBoardRouter);

// Unknown route handler
app.use((req, res) => res.status(404).send('This page does not yet exist...'));


// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Configure the app to listen on the defined port and console.log that the port is being listened on.
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
