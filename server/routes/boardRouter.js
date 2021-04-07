const express = require('express');
const router = express.Router();
const boardStateController = require('../controllers/boardStateController');

// initial route to get board state
router.get('/initial', boardStateController.getInitialState, (req, res) => {
  res.status(200).json(res.locals.initialState);
});

// initial route to get board state
router.get('/', boardStateController.getInitialState, (req, res) => {
  res.status(200).json(res.locals.initialState);
});

module.exports = router;