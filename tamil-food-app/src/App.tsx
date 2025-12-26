import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-brand-gray">
      {/* Navbar stays outside routes so it's always visible */}
      <Navbar />

      <Routes>
        {/* The Main Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/* Example of how we'd add more pages later, like your old project */}
        {/* <Route path="/menu" element={<MenuPage />} /> */}
        {/* <Route path="/reservation" element={<ReservationPage />} /> */}

        {/* Redirect unknown paths to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App