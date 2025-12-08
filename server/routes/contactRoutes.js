const express = require('express');
const router = express.Router();
const {
  submitContactForm,
  getAllMessages,
  getMessageById,
  updateMessageStatus,
  deleteMessage,
  getMessageStats,
} = require('../controllers/contactController');
const { protect, authorize } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { messageSchema } = require('../utils/validators');
const { contactLimiter } = require('../middleware/rateLimiter');

// Public route - submit contact form (with rate limiting)
router.post('/', contactLimiter, validate(messageSchema), submitContactForm);

// Admin routes (protected)
router.get('/', protect, authorize('admin'), getAllMessages);
router.get('/stats', protect, authorize('admin'), getMessageStats);
router.get('/:id', protect, authorize('admin'), getMessageById);
router.patch('/:id/status', protect, authorize('admin'), updateMessageStatus);
router.delete('/:id', protect, authorize('admin'), deleteMessage);

module.exports = router;
