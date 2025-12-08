const express = require('express');
const router = express.Router();
const {
  submitContactForm,
  getAllMessages,
  markAsRead,
} = require('../controllers/contactController');

// Public route - submit contact form
router.post('/', submitContactForm);

// Admin routes (add authentication middleware later)
router.get('/', getAllMessages);
router.patch('/:id/read', markAsRead);

module.exports = router;
