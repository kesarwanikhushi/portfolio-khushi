# Portfolio MERN Stack

A full-stack portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS.

## 🚀 Features

- **Modern UI**: Clean and responsive design with Tailwind CSS
- **React Router**: Client-side routing for smooth navigation
- **RESTful API**: Backend API built with Express.js and MongoDB
- **Contact Form**: Functional contact form with backend integration
- **Projects Showcase**: Display your projects with details and links
- **Skills Display**: Organized skills section by category
- **Reusable Components**: Modular component architecture

## 📁 Project Structure

```
portfolio-mern/
├── client/                 # React Frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── data/          # Static data files
│   │   ├── hooks/         # Custom React hooks
│   │   └── utils/         # Utility functions
│   └── package.json
│
├── server/                # Node + Express Backend
│   ├── controllers/       # Route controllers
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   └── server.js         # Entry point
│
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-mern
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the `server` directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   JWT_SECRET=your_jwt_secret_key
   CLIENT_URL=http://localhost:3000
   ```

5. **Start MongoDB**
   
   Make sure MongoDB is running locally or use MongoDB Atlas

## 🚀 Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```
   Server will run on `http://localhost:5000`

2. **Start the frontend** (in a new terminal)
   ```bash
   cd client
   npm run dev
   ```
   Client will run on `http://localhost:3000`

### Production Build

1. **Build the frontend**
   ```bash
   cd client
   npm run build
   ```

2. **Start the server**
   ```bash
   cd server
   npm start
   ```

## 📡 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)
- `PATCH /api/contact/:id/read` - Mark message as read (admin)

### Health Check
- `GET /api/health` - Check server status

## 🎨 Customization

### Update Personal Information
- Edit `client/src/components/Hero.jsx` for hero section
- Edit `client/src/pages/About.jsx` for bio
- Edit `client/src/data/skills.js` for your skills
- Edit `client/src/data/projects.js` for sample projects

### Styling
- Modify `client/tailwind.config.js` for theme customization
- Update colors, fonts, and spacing in Tailwind config
- Custom styles in `client/src/index.css`

### Add Authentication
- Implement JWT-based authentication
- Add protected routes for admin features
- Create admin panel for managing projects and messages

## 🔐 Security Notes

- Change `JWT_SECRET` in production
- Use environment variables for sensitive data
- Implement rate limiting for API endpoints
- Add input validation and sanitization
- Use HTTPS in production

## 📝 Future Enhancements

- [ ] User authentication for admin panel
- [ ] Image upload functionality
- [ ] Blog section
- [ ] Dark mode toggle
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Performance optimization

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Portfolio: [yourwebsite.com](https://yourwebsite.com)

## ⭐ Show your support

Give a ⭐️ if this project helped you!
