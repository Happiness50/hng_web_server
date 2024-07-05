import express from 'express';
const Controller = require('../controllers/postControllers');

const router = require.Router();

// Retrieve a single user
router.get('/hello', Controller.markHello);

export default router;