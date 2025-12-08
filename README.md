# Portfolio - MERN Stack Project

A full-stack portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) featuring a modern, responsive design with Tailwind CSS.

## 🚀 Features

- **Modern UI/UX** - Clean and professional design with Tailwind CSS
- **Responsive Design** - Works seamlessly on all devices
- **Project Showcase** - Display your projects with descriptions and links
- **Contact Form** - Functional contact form with backend integration
- **About Page** - Showcase your skills and experience
- **RESTful API** - Well-structured backend with Express.js
- **MongoDB Integration** - Store projects and messages in database

## 📁 Project Structure

```
portfolio/
│
├── client/                     # React Frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # Page components
│   │   ├── data/              # Static data files
│   │   ├── hooks/             # Custom React hooks
│   │   ├── utils/             # Utility functions
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/                    # Node + Express Backend
│   ├── controllers/           # Route controllers
│   ├── models/                # Mongoose models
│   ├── routes/                # API routes
│   ├── middleware/            # Custom middleware
│   ├── server.js              # Entry point
│   └── package.json
│
└── README.md
```

## 🛠️ Technologies Used

### Frontend
- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd portfolio
```

2. **Install Backend Dependencies**
```bash
cd server
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../client
npm install
```

4. **Environment Variables**

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

5. **Run the Application**

**Backend** (from server directory):
```bash
npm run dev
```

**Frontend** (from client directory):
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`
The backend will run on `http://localhost:5000`

## 🎯 Usage

### Adding Projects

You can add projects by making a POST request to `/api/projects` or by directly adding them to the MongoDB database.

Example project object:
```json
{
  "title": "Project Name",
  "description": "Project description",
  "technologies": ["React", "Node.js", "MongoDB"],
  "github": "https://github.com/username/repo",
  "live": "https://project-demo.com",
  "image": "https://image-url.com"
}
```

### Contact Form

The contact form sends messages to `/api/contact` which stores them in the MongoDB database.

## 📝 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (protected)
- `GET /api/contact/:id` - Get single message (protected)
- `PUT /api/contact/:id/read` - Mark message as read (protected)
- `DELETE /api/contact/:id` - Delete message (protected)

## 🎨 Customization

### Colors

Edit `client/tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      secondary: '#1E293B',
      accent: '#F59E0B',
    },
  },
}
```

### Content

- Update personal information in `client/src/components/Hero.jsx`
- Modify skills in `client/src/data/skills.js`
- Add projects in `client/src/data/projects.js`
- Edit about page content in `client/src/pages/About.jsx`

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the client: `npm run build` (from client directory)
2. Deploy the `dist` folder

### Backend (Heroku/Railway/Render)
1. Set environment variables in your hosting platform
2. Deploy the server directory
3. Update the API URL in the frontend

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!
