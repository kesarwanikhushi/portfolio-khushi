const express = require('express');
const router = express.Router();
const {
  getAllProjects,
  getFeaturedProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getProjectCategories,
} = require('../controllers/projectController');
const { protect, authorize } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { projectSchema } = require('../utils/validators');

// Public routes
router.get('/', getAllProjects);
router.get('/featured', getFeaturedProjects);
router.get('/stats/categories', getProjectCategories);
router.get('/:identifier', getProjectById);

// Admin routes (protected)
router.post('/', protect, authorize('admin'), validate(projectSchema), createProject);
router.put('/:id', protect, authorize('admin'), validate(projectSchema), updateProject);
router.delete('/:id', protect, authorize('admin'), deleteProject);

module.exports = router;
