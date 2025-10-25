import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function PasosList({ pasos }){
    return(
        <Box>
            {/* Título de la Sección */}
            <Typography 
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ textDecoration: 'underline', textDecorationStyle: 'wavy', color: 'black' }}
            >
                Proceso de Preparación
            </Typography>
                    {/* Implementación de la lista de pasos */}
                    <List>
                        {(pasos || []).map((paso, index) => (
                            <ListItem key={index} disableGutters>
                                <ListItemText 
                                    primary={`Paso ${index + 1}`}
                                    secondary={paso} 
                                    slotProps={{ primary: { sx: { fontWeight: 'bold', color: 'black' } } }}
                                />
                            </ListItem>
                        ))}
                    </List>
        </Box>
    );
}