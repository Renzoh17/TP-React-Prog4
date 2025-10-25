import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantIcon from '@mui/icons-material/Restaurant'; // Icono para el logo
import { Link } from 'react-router-dom';

const navLinks = [
    { title: 'Inicio', path: '/' },
    { title: 'Recetas', path: '/recetas' },
    // Puedes añadir más enlaces aquí
];

function NavBar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Estructura del menú lateral para móviles
    const drawer = (
        <Box 
            onClick={handleDrawerToggle} 
            sx={{ textAlign: 'center', width: 250, backgroundColor: '#71d1e9ff', minHeight: '100vh' }}
        >
            <Typography variant="h6" sx={{ my: 2 }}>
                RecetaApp
            </Typography>
            <List>
                {navLinks.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemText sx={{ px: 2, py: 1 }}>
                            <Button 
                                component={Link} 
                                to={item.path} 
                                sx={{ color: 'inherit', display: 'block', width: '100%' }}
                            >
                                {item.title}
                            </Button>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar>
                {/* 1. Botón de Menú (Solo en Móvil) */}
                <IconButton
                    color="black"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }} // Ocultar en pantallas grandes
                >
                    <MenuIcon />
                </IconButton>

                {/* 2. Logo / Nombre de la Aplicación */}
                <RestaurantIcon sx={{ mr: 1, color: 'black' }} />
                <Typography
                    variant="h6"
                    component={Link} // Usar Link para navegar al inicio
                    to="/"
                    sx={{ 
                        flexGrow: 1, 
                        textDecoration: 'none', 
                        color: 'black' 
                    }}
                >
                    RecetaApp
                </Typography>

                {/* 3. Enlaces de Navegación (Solo en Desktop) */}
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navLinks.map((item) => (
                        <Button key={item.title} color='inherit' component={Link} to={item.path} sx={{ color: 'black' }}>
                            {item.title}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
            
            {/* 4. Drawer (Menú Hamburguesa) */}
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }} // Rendimiento en móvil
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </AppBar>
    );
}

export default NavBar;