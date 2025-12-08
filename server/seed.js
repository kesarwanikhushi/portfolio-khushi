const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Project = require('./models/Project');
const Message = require('./models/Message');

// Load environment variables
dotenv.config();

// Sample data
const users = [
  {
    name: 'Admin User',
    email: process.env.ADMIN_EMAIL || 'admin@example.com',
    password: process.env.ADMIN_PASSWORD || 'admin123',
    role: 'admin',
    bio: 'Full-stack developer and portfolio admin',
    isActive: true,
  },
];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, payment integration, and admin panel.',
    longDescription: 'Built a comprehensive e-commerce solution using MERN stack with features including user authentication, product management, shopping cart, secure payment processing via Stripe, order tracking, and a complete admin dashboard for managing products, orders, and users.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux', 'TailwindCSS'],
    category: 'Full Stack',
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    featured: true,
    status: 'completed',
    order: 1,
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team features.',
    longDescription: 'Developed a real-time collaborative task management application featuring drag-and-drop boards, team collaboration, real-time updates using Socket.io, task assignments, due dates, priority levels, and team analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    ],
    technologies: ['React', 'Express', 'Socket.io', 'MongoDB', 'Node.js', 'Material-UI'],
    category: 'Full Stack',
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/username/task-manager',
    featured: true,
    status: 'completed',
    order: 2,
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for tracking social media metrics and engagement.',
    longDescription: 'Created a comprehensive analytics dashboard that integrates with multiple social media APIs to track metrics, engagement, follower growth, and content performance. Features interactive charts, custom date ranges, and exportable reports.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    ],
    technologies: ['React', 'Node.js', 'Chart.js', 'PostgreSQL', 'Express', 'D3.js'],
    category: 'Full Stack',
    liveUrl: 'https://example-dashboard.com',
    githubUrl: 'https://github.com/username/social-dashboard',
    featured: true,
    status: 'completed',
    order: 3,
  },
  {
    title: 'Weather App',
    description: 'Beautiful weather application with location-based forecasts.',
    longDescription: 'Designed and developed a modern weather application with current weather, hourly and weekly forecasts, location search, geolocation support, and beautiful weather animations.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    technologies: ['React', 'OpenWeather API', 'TailwindCSS', 'Framer Motion'],
    category: 'Frontend',
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/username/weather-app',
    featured: false,
    status: 'completed',
    order: 4,
  },
  {
    title: 'Blog Platform',
    description: 'Modern blogging platform with markdown support and comments.',
    longDescription: 'Built a full-featured blogging platform with markdown editor, syntax highlighting, categories, tags, search functionality, comments system, user profiles, and SEO optimization.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'MongoDB', 'Node.js', 'Express', 'TailwindCSS', 'MDX'],
    category: 'Full Stack',
    liveUrl: 'https://example-blog.com',
    githubUrl: 'https://github.com/username/blog-platform',
    featured: false,
    status: 'completed',
    order: 5,
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with MERN stack.',
    longDescription: 'Designed and developed this portfolio website showcasing my projects and skills. Features include project filtering, contact form, admin dashboard, and responsive design.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS', 'Framer Motion'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/username/portfolio',
    featured: false,
    status: 'completed',
    order: 6,
  },
];

// Connect to database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// Seed function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Project.deleteMany();
    await Message.deleteMany();
    console.log('🗑️  Cleared existing data');

    // Insert users
    const createdUsers = await User.create(users);
    console.log(`✅ Created ${createdUsers.length} users`);

    // Insert projects
    const createdProjects = await Project.create(projects);
    console.log(`✅ Created ${createdProjects.length} projects`);

    console.log('🎉 Database seeded successfully!');
    console.log('\n📝 Admin credentials:');
    console.log(`   Email: ${users[0].email}`);
    console.log(`   Password: ${users[0].password}`);
    console.log('\n⚠️  Please change the admin password after first login!\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run seed
seedDatabase();
