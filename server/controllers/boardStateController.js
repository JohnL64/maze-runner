// Require in database connection
const db = require('../models/postgresModel');

// Create a boardStateController object and assign it an empty object. 
// All of our middlewares will be methods of this object
const boardStateController = {};

// Archetype controller method
boardStateController.getInitialState = (req, res, next) => {
  // create an initialStateQuery
  const initialStateQuery = 
    `SELECT ***
    FROM ****
    `;
  try {
    db.query(initialStateQuery, (err, result) => {
      const {rows} = result;
      res.locals.initialState = rows;
      return next();
    });
  } catch (err) {next(err);}
};

// Save board state results
boardStateController.getInitialState = (req, res, next) => {
  // create an initialStateQuery
  const initialStateQuery = 
    `SELECT ***
    FROM ****
    `;
  try {
    db.query(initialStateQuery, (err, result) => {
      const {rows} = result;
      res.locals.initialState = rows;
      return next();
    });
  } catch (err) {next(err);}
};

module.exports = boardStateController;