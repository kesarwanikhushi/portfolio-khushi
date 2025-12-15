# Portfolio Website

A modern, interactive portfolio website built with React, Vite, and Tailwind CSS. Features custom cursor effects, smooth animations, and a responsive design.

## 🚀 Features

- **Modern UI**: Clean and responsive design with Tailwind CSS
- **Custom Cursors**: Multiple interactive cursor designs with magnetic effects
- **Smooth Animations**: Framer Motion and React Spring animations
- **React Router**: Client-side routing for smooth navigation
- **Contact Form**: Functional contact form with toast notifications
- **Projects Showcase**: Display your projects with details and modals
- **Skills Display**: Organized skills section by category
- **Reusable Components**: Modular component architecture with UI library

## 📁 Project Structure

```
portfolio/
├── client/                 # React Frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── ui/        # UI primitives (Button, Card, Modal, etc.)
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── CursorDesigns.jsx
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── EducationSection.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── MagneticCursor.jsx
│   │   │   ├── ModernCursor.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── PageLoader.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── SimpleCursor.jsx
│   │   │   └── SkillsSection.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── About.jsx
│   │   │   └── NewHome.jsx
│   │   ├── data/          # Static data files
│   │   │   ├── projects.js
│   │   │   └── skills.js
│   │   ├── hooks/         # Custom React hooks
│   │   │   └── useCursorTheme.js
│   │   ├── context/       # React context
│   │   ├── services/      # API services
│   │   ├── utils/         # Utility functions
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### Animations & Interactions
- **Framer Motion** - Advanced animations
- **React Spring** - Spring physics animations
- **Locomotive Scroll** - Smooth scrolling
- **React Intersection Observer** - Viewport detection

### UI Components
- **React Icons** - Icon library
- **React Hot Toast** - Toast notifications
- **React Type Animation** - Typing animations
- **React Scroll** - Scroll utilities

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   cd client
   npm install
   ```

## 🚀 Running the Application

### Development Mode

1. **Start the development server**
   ```bash
   cd client
   npm run dev
   ```
   Client will run on `http://localhost:5173`

### Production Build

1. **Build the frontend**
   ```bash
   cd client
   npm run build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Update Personal Information
- Edit [Hero.jsx](client/src/components/Hero.jsx) for hero section
- Edit [About.jsx](client/src/pages/About.jsx) for bio
- Edit [skills.js](client/src/data/skills.js) for your skills
- Edit [projects.js](client/src/data/projects.js) for your projects

### Cursor Themes
- Choose from multiple cursor designs in [CursorDesigns.jsx](client/src/components/CursorDesigns.jsx)
- Available cursors: Simple, Modern, Magnetic
- Customize cursor behavior in respective component files

### Styling
- Modify [tailwind.config.js](client/tailwind.config.js) for theme customization
- Update colors, fonts, and spacing in Tailwind config
- Custom styles in [index.css](client/src/index.css)

### Components
- Reusable UI components available in `client/src/components/ui/`
- Includes: AnimatedText, Badge, Button, Card, Container, FloatingElement, GlowCard, GradientBorder, Input, Loading, MarqueeText, Modal, ScrollReveal, SectionHeading, Textarea

## 📝 Future Enhancements

- [ ] Backend API integration
- [ ] Blog section
- [ ] Dark mode toggle
- [ ] More cursor designs
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Performance optimization

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⭐ Show your support

Give a ⭐️ if this project helped you!
