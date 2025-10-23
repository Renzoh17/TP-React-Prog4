// src/components/recetas/IngredientesList.jsx

import { Alert } from '@mui/material';
import { Typography, List, ListItem, ListItemText, Divider, Box } from '@mui/material';

/**
 * Muestra la lista de ingredientes de una receta.
 * @param {Array<Object>} ingredientes - El array de ingredientes de la receta.
 */
function IngredientesList({ ingredientes }) {
    if (!ingredientes || ingredientes.length === 0) {
        return <Alert severity="info">No se ha especificado la lista de ingredientes.</Alert>;
    }

    return (
        <Box mb={4}>
            <Typography variant="h5" component="h2" gutterBottom>
                Lista de Ingredientes
            </Typography>
            
            {/* Implementación de lista con viñetas (usando los estilos previamente corregidos) */}
            <List 
                dense 
                component="ul"
                sx={{ 
                    listStyleType: 'disc', 
                    pl: 4, 
                    // Estilo para ListItemText para asegurar que se vea bien en la lista
                    '& .MuiListItemText-primary': { display: 'inline' } 
                }}
            >
                {ingredientes.map((ing, index) => (
                    <ListItem 
                        key={index} 
                        disablePadding 
                        sx={{ display: 'list-item' }} // Convierte el ListItem a <li>
                    >
                        <ListItemText 
                            primary={
                                // Combina cantidad, unidad y nombre
                                `${ing.cantidad} ${ing.unidad} de ${ing.nombre}` 
                            }
                            // Opcional: puedes usar secondary para más detalles
                            // secondary={ing.unidad} 
                        />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );
}

export default IngredientesList;