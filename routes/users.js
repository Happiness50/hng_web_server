const express = require('express');
const Controller = require('../controllers/postControllers');

const router = express.Router();

// Retrieve a single user
router.get('/hello', Controller.markHello);

module.exports = router;