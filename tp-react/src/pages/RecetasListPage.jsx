
import { Container, Typography, CircularProgress, Alert } from '@mui/material';
import RecetaList from '../components/recetas/RecetasList';
import { RecetasProvider, useRecetas } from '../contexts/RecetasContext';
import { useNavigate } from 'react-router-dom'; 

function RecetasContent() {
    const { recetas, loading, error } = useRecetas(); 
    const navigate = useNavigate();


    const handleVerReceta = (id) => {
      navigate(`/recetas/${id}`);
    };

    // Lógica de visualización (Loading, Error, Lista)
    if (loading) {
      return (
        <Container sx={{ py: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
          <CircularProgress />
          <Typography variant="h6" sx={{ ml: 2 }}>Cargando recetas...</Typography>
        </Container>
      );
    }

    if (error) {
      return (
        <Container sx={{ py: 4 }}>
          <Alert severity="error">Error: {error}</Alert>
        </Container>
      );
    }
    
    if (recetas.length === 0) {
        return (
          <Container sx={{ py: 4 }}>
              <Alert severity="info">No se encontraron recetas disponibles.</Alert>
          </Container>
        );
    }

    return (

      <RecetaList 
      recetas={recetas} 
      onVerReceta={handleVerReceta} 
      />

    );
}

// Componente principal que EXPORTA y ENVUELVE al contenido
function RecetasPage() {
    // RecetasPage ahora solo se encarga de proporcionar el contexto
    return (
        <RecetasProvider>
            {/* RecetasContent (que usa useRecetas) es el hijo del Provider */}
            <RecetasContent /> 
        </RecetasProvider>
    );
}

export default RecetasPage;