import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, CircularProgress, Alert, Box, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// Importamos ambos, el Provider y el hook, desde el Contexto
import { RecetasProvider, useRecetas } from '../contexts/RecetasContext'; 
import IngredientesList from '../components/recetas/IngredientesList';
import PasosList from '../components/recetas/PasosList';
import RecetaDetalle from '../components/recetas/RecetaDetalle';

// Componente que CONSUME el Contexto
function RecetaDetailContent() {
    
    // Obtener el ID de la URL
    const { id } = useParams();

    // Obtener los datos y estados del contexto (REQUIERE ESTAR DENTRO DEL PROVIDER)
    const { recetas, loading, error } = useRecetas(); 
    const navigate = useNavigate();

    // Lógica para encontrar la receta específica
    const receta = recetas.find(r => r.id == id);

    // Módulos de Estado y Error del Contexto
    if (loading) {
        return (
            <Container sx={{ py: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <CircularProgress />
                <Typography variant="h6" sx={{ ml: 2 }}>Cargando detalles de la receta...</Typography>
            </Container>
        );
    }

    if (error) {
        return (
            <Container sx={{ py: 4 }}>
                <Alert severity="error">Error al cargar la receta: {error}</Alert>
            </Container>
        );
    }
    
    // Si no se encuentra la receta después de la carga
    if (!receta) {
        return (
            <Container sx={{ py: 4 }}>
                <Alert severity="warning">Receta no encontrada (ID: {id}).</Alert>
                <Box sx={{ mt: 2 }}>
                    <Button 
                        variant="outlined" 
                        startIcon={<ChevronLeftIcon />} 
                        onClick={() => navigate('/recetas')}
                    >
                        Volver al Listado
                    </Button>
                </Box>
            </Container>
        );
    }
    
    // Renderizado del Contenido 
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Button 
                variant="outlined" 
                startIcon={<ChevronLeftIcon />} 
                onClick={() => navigate('/recetas')}
                sx={{ mb: 3 }}
            >
                Volver al Listado
            </Button>
            
            <Grid container spacing={4}>
                {/* Columna de Imagen y Título */}
                <RecetaDetalle receta={receta} />

                {/* Columna de Ingredientes y Proceso */}
                <Grid size={{xs: 12, md:6 }}>
 
                    <IngredientesList ingredientes={receta.ingredientes} />

                    <PasosList pasos={receta.pasos} />

                </Grid>
            </Grid>
        </Container>
    );
}


// --- 2. Componente principal que EXPORTA y PROVEE el Contexto ---
function RecetaDetailPage() {
    // La página solo se encarga de envolver su contenido en el Provider
    return (
        <RecetasProvider>
            {/* 💡 El componente de Contenido es el hijo del Provider */}
            <RecetaDetailContent /> 
        </RecetasProvider>
    );
}

export default RecetaDetailPage;