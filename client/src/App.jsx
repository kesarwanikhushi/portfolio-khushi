import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import NewHome from './pages/NewHome';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark-950">
        {/* Page Loader */}
        <PageLoader />

        {/* Custom Cursor */}
        <CustomCursor />

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
                boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                borderRadius: '1rem',
                border: '1px solid #334155',
                padding: '1rem',
              },
              success: {
              iconTheme: {
                primary: '#00d9ff',
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