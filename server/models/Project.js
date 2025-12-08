const mongoose = require('mongoose');
const slugify = require('slugify');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a project title'],
      trim: true,
      maxLength: [100, 'Title cannot exceed 100 characters'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a project description'],
      trim: true,
      maxLength: [500, 'Description cannot exceed 500 characters'],
    },
    longDescription: {
      type: String,
      maxLength: [2000, 'Long description cannot exceed 2000 characters'],
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/400x200',
    },
    images: [{
      type: String,
    }],
    technologies: {
      type: [String],
      required: [true, 'Please specify the technologies used'],
    },
    category: {
      type: String,
      enum: ['Web Development', 'Mobile App', 'Full Stack', 'Frontend', 'Backend', 'UI/UX', 'Other'],
      default: 'Web Development',
    },
    liveUrl: {
      type: String,
      trim: true,
    },
    githubUrl: {
      type: String,
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['completed', 'in-progress', 'planned'],
      default: 'completed',
    },
    order: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexes for better query performance
projectSchema.index({ slug: 1 });
projectSchema.index({ category: 1 });
projectSchema.index({ featured: -1, order: -1 });

// Pre-save middleware to generate slug
projectSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model('Project', projectSchema);
