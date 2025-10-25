import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Star } from '@mui/icons-material';

export default function RecetaDetalle({ receta }) {
    
    // Funcion aux para obtener el color de la dificultad
    const getDificultadColor = (dificultad) => {
        switch (dificultad.toLowerCase()) {
            case 'fácil': return 'success';
            case 'media': return 'warning';
            case 'difícil': return 'error';
            default: return 'default';
        }
    };
    
    return (
        <Grid size={{xs: 12, md:6 }}>
                    <Card raised sx={{ backgroundColor: '#71d1e9ff' }}>
                        <CardMedia
                            component="img"
                            image={receta.imagen || 'https://via.placeholder.com/600x400?text=Imagen+No+Disponible'}
                            alt={receta.titulo}
                            sx={{ maxHeight: 450 }}
                        />
                        <CardContent>
                            <Typography variant="h4" component="h1" gutterBottom>
                                {receta.titulo}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" paragraph>
                                {receta.descripcion || "Una deliciosa receta fácil de preparar y perfecta para cualquier ocasión."}
                            </Typography>
                            
                            <Divider sx={{ my: 2 }} />

                            {/* Información General */}
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
                                <Chip 
                                    icon={<AccessTimeIcon />} 
                                    label={`Tiempo: ${receta.tiempoPreparacion}`} 
                                    variant="outlined" 
                                    sx={{ borderColor: 'black' }}
                                />
                                <Chip 
                                    icon={<Star />} 
                                    label={`Dificultad: ${receta.dificultad}`} 
                                    color={getDificultadColor(receta.dificultad)} 
                                    variant="filled"
                                    sx={{ borderColor: 'black', color: 'black', '& .MuiChip-icon': { color: 'grey' } }}
                                />
                                <Chip 
                                    icon={<RestaurantIcon />} 
                                    label={`${receta.porciones} Porciones`} 
                                    variant="outlined"
                                    sx={{ borderColor: 'black' }}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
    );
}