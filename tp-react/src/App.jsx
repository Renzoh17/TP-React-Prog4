import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import RecetasListPage from './pages/RecetasListPage';
import RecetaDetallePage from './pages/RecetaDetallePage';

function App() {
  // Configuración del Router y Rutas
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecetasListPage />} />
        <Route path="/recetas" element={<RecetasListPage />} />
        {<Route path="/recetas/:id" element={<RecetaDetallePage />} />}
      </Routes>
    </Router>
  );
}

export default App
