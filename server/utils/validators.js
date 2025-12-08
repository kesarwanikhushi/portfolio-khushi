const Joi = require('joi');

// Project validation schema
const projectSchema = Joi.object({
  title: Joi.string().required().max(100).trim(),
  description: Joi.string().required().max(500).trim(),
  longDescription: Joi.string().max(2000).trim().allow(''),
  image: Joi.string().uri().allow(''),
  images: Joi.array().items(Joi.string().uri()),
  technologies: Joi.array().items(Joi.string()).required().min(1),
  category: Joi.string().valid('Web Development', 'Mobile App', 'Full Stack', 'Frontend', 'Backend', 'UI/UX', 'Other'),
  liveUrl: Joi.string().uri().allow(''),
  githubUrl: Joi.string().uri().allow(''),
  featured: Joi.boolean(),
  status: Joi.string().valid('completed', 'in-progress', 'planned'),
  order: Joi.number().min(0),
});

// Message validation schema
const messageSchema = Joi.object({
  name: Joi.string().required().min(2).max(50).trim(),
  email: Joi.string().required().email().trim(),
  subject: Joi.string().required().max(100).trim(),
  message: Joi.string().required().min(10).max(1000).trim(),
});

// User registration validation schema
const registerSchema = Joi.object({
  name: Joi.string().required().min(2).max(50).trim(),
  email: Joi.string().required().email().trim(),
  password: Joi.string().required().min(6).max(50),
});

// User login validation schema
const loginSchema = Joi.object({
  email: Joi.string().required().email().trim(),
  password: Joi.string().required(),
});

module.exports = {
  projectSchema,
  messageSchema,
  registerSchema,
  loginSchema,
};
