const Message = require('../models/Message');
const ApiResponse = require('../utils/apiResponse');
const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Get IP address
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Create new message
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
      ipAddress,
    });

    // Send email notification (optional - will fail gracefully if not configured)
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.CONTACT_EMAIL,
        subject: `New Contact Form: ${subject}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    } catch (emailError) {
      console.log('Email notification failed:', emailError.message);
      // Continue execution - email is optional
    }

    return ApiResponse.success(res, newMessage, 'Message sent successfully. We will get back to you soon!', 201);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all messages with pagination and filtering
// @route   GET /api/contact
// @access  Private/Admin
const getAllMessages = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, status, search } = req.query;

    // Build query
    const query = {};
    if (status) query.status = status;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } },
      ];
    }

    // Execute query with pagination
    const skip = (page - 1) * limit;
    const messages = await Message.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip(skip);

    const total = await Message.countDocuments(query);

    return ApiResponse.paginated(res, messages, page, limit, total, 'Messages fetched successfully');
  } catch (error) {
    next(error);
  }
};

// @desc    Get single message
// @route   GET /api/contact/:id
// @access  Private/Admin
const getMessageById = async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return ApiResponse.error(res, 'Message not found', 404);
    }

    return ApiResponse.success(res, message, 'Message fetched successfully');
  } catch (error) {
    next(error);
  }
};

// @desc    Update message status
// @route   PATCH /api/contact/:id/status
// @access  Private/Admin
const updateMessageStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { status, isRead: status !== 'unread' },
      { new: true, runValidators: true }
    );

    if (!message) {
      return ApiResponse.error(res, 'Message not found', 404);
    }

    return ApiResponse.success(res, message, 'Message status updated successfully');
  } catch (error) {
    next(error);
  }
};

// @desc    Delete message
// @route   DELETE /api/contact/:id
// @access  Private/Admin
const deleteMessage = async (req, res, next) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);

    if (!message) {
      return ApiResponse.error(res, 'Message not found', 404);
    }

    return ApiResponse.success(res, null, 'Message deleted successfully');
  } catch (error) {
    next(error);
  }
};

// @desc    Get message statistics
// @route   GET /api/contact/stats
// @access  Private/Admin
const getMessageStats = async (req, res, next) => {
  try {
    const total = await Message.countDocuments();
    const unread = await Message.countDocuments({ status: 'unread' });
    const read = await Message.countDocuments({ status: 'read' });
    const archived = await Message.countDocuments({ status: 'archived' });

    const stats = {
      total,
      unread,
      read,
      archived,
    };

    return ApiResponse.success(res, stats, 'Message statistics fetched successfully');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContactForm,
  getAllMessages,
  getMessageById,
  updateMessageStatus,
  deleteMessage,
  getMessageStats,
};
