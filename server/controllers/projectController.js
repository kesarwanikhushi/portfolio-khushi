const Project = require('../models/Project');
const ApiResponse = require('../utils/apiResponse');

// @desc    Get all projects with filtering, sorting, and pagination
// @route   GET /api/projects
// @access  Public
const getAllProjects = async (req, res, next) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      category, 
      featured, 
      status,
      search,
      sort = '-createdAt' 
    } = req.query;

    // Build query
    const query = {};
    
    if (category) query.category = category;
    if (featured) query.featured = featured === 'true';
    if (status) query.status = status;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { technologies: { $in: [new RegExp(search, 'i')] } },
      ];
    }

    // Execute query with pagination
    const skip = (page - 1) * limit;
    const projects = await Project.find(query)
      .sort(sort)
      .limit(parseInt(limit))
      .skip(skip);

    const total = await Project.countDocuments(query);

    return ApiResponse.paginated(res, projects, page, limit, total, 'Projects fetched successfully');
  } catch (error) {
    next(error);
  }
};

// @desc    Get featured projects
// @route   GET /api/projects/featured
// @access  Public
const getFeaturedProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({ featured: true }).sort({ order: 1, createdAt: -1 });

    return ApiResponse.success(res, projects, 'Featured projects fetched successfully');
  } catch (error) {
    next(error);
  }
};

// @desc    Get single project by ID or slug
// @route   GET /api/projects/:identifier
// @access  Public
const getProjectById = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    
    // Try to find by ID first, then by slug
    let project = await Project.findById(identifier).catch(() => null);
    
    if (!project) {
      project = await Project.findOne({ slug: identifier });
    }

    if (!project) {
      return ApiResponse.error(res, 'Project not found', 404);
    }

    // Increment views
    project.views += 1;
    await project.save();

    return ApiResponse.success(res, project, 'Project fetched successfully');
  } catch (error) {
    next(error);
  }
};

// @desc    Create new project
// @route   POST /api/projects
// @access  Private/Admin
const createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);

    return ApiResponse.success(res, project, 'Project created successfully', 201);
  } catch (error) {
    next(error);
  }
};

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private/Admin
const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!project) {
      return ApiResponse.error(res, 'Project not found', 404);
    }

    return ApiResponse.success(res, project, 'Project updated successfully');
  } catch (error) {
    next(error);
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return ApiResponse.error(res, 'Project not found', 404);
    }

    return ApiResponse.success(res, null, 'Project deleted successfully');
  } catch (error) {
    next(error);
  }
};

// @desc    Get project categories
// @route   GET /api/projects/stats/categories
// @access  Public
const getProjectCategories = async (req, res, next) => {
  try {
    const categories = await Project.distinct('category');
    
    const categoriesWithCount = await Promise.all(
      categories.map(async (category) => {
        const count = await Project.countDocuments({ category });
        return { category, count };
      })
    );

    return ApiResponse.success(res, categoriesWithCount, 'Categories fetched successfully');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProjects,
  getFeaturedProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getProjectCategories,
};
