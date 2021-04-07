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

// Archetype controller method
boardStateController.retrieveState = (req, res, next) => {
  // create an initialStateQuery
  const retrieveStateQuery = 
    `SELECT ***
    FROM ****
    `;
  try {
    db.query(retrieveStateQuery, (err, result) => {
      const {rows} = result;
      res.locals.specificState = rows;
      return next();
    });
  } catch (err) {next(err);}
};

// Save board state results
boardStateController.saveBoardState = (req, res, next) => {
  // create an saveStateQuery
  const saveStateQuery = 
    `SELECT ***
    FROM ****
    `;
  try {
    db.query(saveStateQuery, (err, result) => {
      const {rows} = result;
      res.locals.savedState = rows;
      return next();
    });
  } catch (err) {next(err);}
};

// Delete board state
boardStateController.deleteBoardState = (req, res, next) => {
  // create an deleteStateQuery
  const deleteStateQuery = 
    `SELECT ***
    FROM ****
    `;
  try {
    db.query(deleteStateQuery, (err, result) => {
      const {rows} = result;
      res.locals.deletedState = rows;
      return next();
    });
  } catch (err) {next(err);}
};

module.exports = boardStateController;