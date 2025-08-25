import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
    Container,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { Menu as MenuIcon, EventAvailable as EventAvailableIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [ isScrolled, setIsScrolled ] = useState(false);
    const [ mobileOpen, setMobileOpen ] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Blog', path: '/blog' },
        { name: 'Offers', path: '/offers' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <AppBar
            position="fixed"
            sx={ {
                bgcolor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? theme.shadows[ 1 ] : 'none',
                transition: 'background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                color: isScrolled ? theme.palette.text.primary : theme.palette.primary.contrastText,
            } }
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        component={ RouterLink }
                        to="/"
                        sx={ {
                            flexGrow: 1,
                            fontFamily: 'Cormorant Garamond',
                            fontWeight: 700,
                            color: isScrolled ? theme.palette.primary.main : theme.palette.primary.contrastText,
                            textDecoration: 'none',
                            fontSize: { xs: '1.5rem', md: '2rem' },
                        } }
                    >
                        Chaitali Parlour
                    </Typography>

                    { isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={ handleDrawerToggle }
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={ { display: 'flex', alignItems: 'center', gap: 2 } }>
                            { navItems.map((item) => (
                                <Button
                                    key={ item.name }
                                    component={ RouterLink }
                                    to={ item.path }
                                    sx={ {
                                        color: isScrolled ? theme.palette.text.secondary : theme.palette.primary.contrastText,
                                        '&:hover': {
                                            color: isScrolled ? theme.palette.primary.main : theme.palette.secondary.light,
                                        },
                                        fontWeight: 600,
                                    } }
                                >
                                    { item.name }
                                </Button>
                            )) }
                            <Button
                                variant="contained"
                                color="primary"
                                component={ RouterLink }
                                to="/book"
                                startIcon={ <EventAvailableIcon /> }
                                sx={ { ml: 2 } }
                            >
                                Book Now
                            </Button>
                        </Box>
                    ) }
                </Toolbar>
            </Container>
            {/* Mobile Drawer */ }
            <AnimatePresence>
                { mobileOpen && isMobile && (
                    <motion.div
                        initial={ { y: -100, opacity: 0 } }
                        animate={ { y: 0, opacity: 1 } }
                        exit={ { y: -100, opacity: 0 } }
                        transition={ { duration: 0.3 } }
                        style={ {
                            position: 'fixed',
                            top: '64px', // Adjust based on AppBar height
                            left: 0,
                            width: '100%',
                            backgroundColor: theme.palette.background.paper,
                            boxShadow: theme.shadows[ 2 ],
                            zIndex: 999,
                        } }
                    >
                        <Box sx={ { p: 2, display: 'flex', flexDirection: 'column', gap: 1 } }>
                            { navItems.map((item) => (
                                <Button
                                    key={ item.name }
                                    component={ RouterLink }
                                    to={ item.path }
                                    onClick={ handleDrawerToggle }
                                    sx={ {
                                        color: theme.palette.text.primary,
                                        justifyContent: 'flex-start',
                                        '&:hover': {
                                            backgroundColor: theme.palette.primary.light,
                                        },
                                    } }
                                >
                                    { item.name }
                                </Button>
                            )) }
                            <Button
                                variant="contained"
                                color="primary"
                                component={ RouterLink }
                                to="/book"
                                startIcon={ <EventAvailableIcon /> }
                                onClick={ handleDrawerToggle }
                                sx={ { mt: 2 } }
                            >
                                Book Now
                            </Button>
                        </Box>
                    </motion.div>
                ) }
            </AnimatePresence>
        </AppBar>
    );
};

export default Header;
