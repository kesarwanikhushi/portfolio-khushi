import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import NewHome from './pages/NewHome';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen" style={{
        background: 'radial-gradient(ellipse at center, #2d2d2d 0%, #252525 20%, #1a1a1a 40%, #121212 60%, #0a0a0a 80%, #000000 100%)',
        backgroundAttachment: 'fixed'
      }}>
        {/* Page Loader */}
        <PageLoader />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<NewHome />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>          {/* Footer */}
          <Footer />
          
          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#1e293b',
                color: '#f1f5f9',
                boxShadow: '0 0 20px rgba(148, 163, 184, 0.3)',
                borderRadius: '1rem',
                border: '1px solid #334155',
                padding: '1rem',
              },
              success: {
              iconTheme: {
                primary: '#94a3b8',
                secondary: '#f1f5f9',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#f1f5f9',
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;