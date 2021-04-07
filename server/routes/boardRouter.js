const express = require('express');
const router = express.Router();
const boardStateController = require('../controllers/boardStateController');

// initial route to get board state
router.get('/test', (req, res) => {
  console.log('This is only the beginning');
  res.status(200).json('You made it!!!! Express is working');
});

// initial route to get board state
router.get('/initial', boardStateController.getInitialState, (req, res) => {
  res.status(200).json(res.locals.initialState);
});

// initial route to get board state
router.get('/retrieveState', boardStateController.getSpecificState, (req, res) => {
  res.status(200).json(res.locals.specificState);
});

// route to save board state
router.post('/saveState', boardStateController.saveBoardState, (req, res) => {
  res.status(200).json(res.locals.savedState);
});

// route to delete board state
router.post('/deleteState', boardStateController.deleteBoardState, (req, res) => {
  res.status(200).json(res.locals.deletedState);
});

module.exports = router;