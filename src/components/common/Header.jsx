import React, { useState, useEffect } from 'react';
import { Link as RouterLink, NavLink, useLocation } from 'react-router-dom';
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
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();

    const isHomePage = location.pathname === '/';

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

    const isHeaderTransparent = isHomePage && !isScrolled;

    const navLinkStyles = {
        position: 'relative',
        color: isHeaderTransparent ? 'white' : theme.palette.text.primary,
        fontWeight: 600,
        textDecoration: 'none',
        p: '8px 16px',
        '&::after': {
            content: '""',
            position: 'absolute',
            width: 0,
            height: '2px',
            bottom: '4px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: theme.palette.primary.main,
            transition: 'width 0.3s ease-in-out',
        },
        '&:hover::after': {
            width: 'calc(100% - 32px)',
        },
        '&:hover': {
            backgroundColor: 'transparent', // prevent default hover background
            color: isHeaderTransparent ? 'white' : theme.palette.primary.main,
        },
        '&.active': {
            color: theme.palette.primary.main,
        },
        '&.active::after': {
            width: 'calc(100% - 32px)',
        },
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                bgcolor: isHeaderTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: isHeaderTransparent ? 'none' : 'blur(10px)',
                boxShadow: isHeaderTransparent ? 'none' : theme.shadows[1],
                transition: 'background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                color: isHeaderTransparent ? 'white' : theme.palette.text.primary,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        component={RouterLink}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'Cormorant Garamond',
                            fontWeight: 700,
                            color: isHeaderTransparent ? 'white' : theme.palette.primary.main,
                            textDecoration: 'none',
                            fontSize: { xs: '1.5rem', md: '2rem' },
                        }}
                    >
                        Chaitali Parlour
                    </Typography>

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.name}
                                    component={NavLink}
                                    to={item.path}
                                    end={item.path === '/'}
                                    sx={navLinkStyles}
                                >
                                    {item.name}
                                </Button>
                            ))}
                            <Button
                                variant="contained"
                                color="primary"
                                component={RouterLink}
                                to="/book"
                                startIcon={<EventAvailableIcon />}
                                sx={{ ml: 2 }}
                            >
                                Book Now
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </Container>
            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && isMobile && (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: '64px', // Adjust based on AppBar height
                            left: 0,
                            width: '100%',
                            backgroundColor: theme.palette.background.paper,
                            boxShadow: theme.shadows[2],
                            zIndex: 999,
                        }}
                    >
                        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.name}
                                    component={RouterLink}
                                    to={item.path}
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        justifyContent: 'flex-start',
                                        '&:hover': {
                                            backgroundColor: theme.palette.primary.light,
                                        },
                                    }}
                                >
                                    {item.name}
                                </Button>
                            ))}
                            <Button
                                variant="contained"
                                color="primary"
                                component={RouterLink}
                                to="/book"
                                startIcon={<EventAvailableIcon />}
                                onClick={handleDrawerToggle}
                                sx={{ mt: 2 }}
                            >
                                Book Now
                            </Button>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </AppBar>
    );
};

export default Header;
