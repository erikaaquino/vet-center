import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Emergency from './pages/Emergency';
import PetCare from './pages/PetCare';
import Contact from './pages/Contact';
import Nutricion from './pages/Nutricion';
import Cachorros from './pages/Cachorros';
import Gatos from './pages/Gatos';
import MascotasMayores from './pages/MascotasMayores';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/pet-care" element={<PetCare />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nutricion" element={<Nutricion />} />
          <Route path="/cachorros" element={<Cachorros />} />
          <Route path="/gatos" element={<Gatos />} />
          <Route path="/mascotas-mayores" element={<MascotasMayores />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
