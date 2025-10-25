import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Box
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Star } from '@mui/icons-material';

function RecetaCard({ receta, onVerReceta }) {
  // Función para obtener el color de la dificultad
  const getDificultadColor = (dificultad) => {
    switch (dificultad.toLowerCase()) {
      case 'fácil':
        return 'success'; // Verde
      case 'media':
        return 'warning'; // Naranja
      case 'difícil':
        return 'error'; // Rojo
      default:
        return 'default';
    }
  };

  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      '&:hover': {
        boxShadow: 6, // Efecto hover para la tarjeta
      },
      backgroundColor: '#71d1e9ff'
    }}>
      <CardMedia
        component="img"
        height="180"
        image={receta.imagen || 'https://via.placeholder.com/300x180?text=Receta'} 
        alt={receta.titulo}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {receta.titulo}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
          <Chip 
              icon={<AccessTimeIcon />} 
              label={receta.tiempoPreparacion} 
              size="small" 
              variant="outlined"
              sx={{ mb: 1, borderColor: 'black'}}
            />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Chip 
                icon={<RestaurantIcon />} 
                label={`${receta.porciones} porciones`}
                size="small"
                variant="outlined"
                sx={{ borderColor: 'black'}}
              />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Chip 
                icon={<Star/>} 
                label={`Dificultad`}
                size="small"
                variant="outlined"
                sx={{ borderColor: 'black' }}
              />
            <Chip 
              label={receta.dificultad} 
              color={getDificultadColor(receta.dificultad)} 
              size="small" 
              sx={{ ml: 1, color: 'black' }}
          />
        </Box>

      </CardContent>
      <Box sx={{ p: 2, pt: 0, mt: 'auto' }}> 

          {/* CardActions contiene los botones y se mantiene debajo del chip */}
          <CardActions 
              sx={{ 
                  p: 0, // Remover padding interno para que se alinee con el Box
                  justifyContent: 'space-between', 
                  alignItems: 'center',
              }}
          >
              <Button 
                  size="small" 
                  variant="contained" 
                  onClick={() => onVerReceta(receta.id)}
                  sx={{ flexGrow: 1, mr: 1 }}
              >
                  Ver Receta
              </Button>
          </CardActions>
      </Box>
    </Card>
  );
}

export default RecetaCard;