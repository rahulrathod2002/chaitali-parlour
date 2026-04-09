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
import MenuIcon from '@mui/icons-material/Menu';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
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

    const handleNavClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const isHeaderTransparent = isHomePage && !isScrolled;

    const navLinkStyles = {
        position: 'relative',
        color: isHeaderTransparent ? 'white' : theme.palette.text.primary,
        fontWeight: 600,
        textDecoration: 'none',
        px: 1.75,
        py: 1,
        borderRadius: '999px',
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
            backgroundColor: isHeaderTransparent ? 'rgba(255, 255, 255, 0.08)' : theme.palette.primary.soft,
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
                bgcolor: isHeaderTransparent ? 'transparent' : 'rgba(255, 251, 249, 0.92)',
                backdropFilter: isHeaderTransparent ? 'none' : 'blur(10px)',
                boxShadow: isHeaderTransparent ? 'none' : theme.shadows[3],
                borderBottom: isHeaderTransparent ? 'none' : `1px solid ${theme.palette.divider}`,
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
                        onClick={handleNavClick}
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'Cormorant Garamond',
                            fontWeight: 700,
                            color: isHeaderTransparent ? 'white' : theme.palette.primary.main,
                            textDecoration: 'none',
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            letterSpacing: '0.03em',
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
                                    onClick={handleNavClick}
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
                                onClick={handleNavClick}
                                sx={{ ml: 2, boxShadow: theme.shadows[4] }}
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
                            boxShadow: theme.shadows[4],
                            zIndex: 999,
                            borderBottom: `1px solid ${theme.palette.divider}`,
                        }}
                    >
                        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.name}
                                    component={NavLink}
                                    to={item.path}
                                    end={item.path === '/'}
                                    onClick={() => {
                                        handleDrawerToggle();
                                        handleNavClick();
                                    }}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        justifyContent: 'flex-start',
                                        borderRadius: 3,
                                        px: 2,
                                        py: 1.25,
                                        '&.active': {
                                            color: theme.palette.primary.main,
                                            backgroundColor: theme.palette.primary.soft,
                                        },
                                        '&:hover': {
                                            backgroundColor: theme.palette.primary.soft,
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
                                onClick={() => {
                                    handleDrawerToggle();
                                    handleNavClick();
                                }}
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
