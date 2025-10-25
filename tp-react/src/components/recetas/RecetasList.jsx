import { Container, Typography, Grid } from '@mui/material';
import RecetaCard from '../recetas/RecetaCard';

// Este componente solo se encarga de dibujar el listado
export default function RecetaList({ recetas, onVerReceta }) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Título de la Sección */}
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        align="center" 
        sx={{ mb: 4 , fontWeight: 'bold', color: 'black'}}
      >
        Nuestras Recetas
      </Typography>
      
      {/* Cuadrícula de Recetas */}
      <Grid container spacing={4}>
        {recetas.map((receta) => (
          <Grid key={receta.id} size={{xs: 12, sm:6, md:4, lg:3}}>
            <RecetaCard 
              receta={receta} 
              onVerReceta={onVerReceta} // Pasa el handler de navegación
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}