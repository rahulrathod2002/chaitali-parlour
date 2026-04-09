import React, { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Grid,
    IconButton,
    useTheme,
    Link,
    Divider,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { motion } from 'framer-motion';

const Footer = () => {
    const theme = useTheme();
    const quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Gallery', path: '/gallery' },
        { label: 'Testimonials', path: '/testimonials' },
        { label: 'Book Now', path: '/book' },
        { label: 'Contact Us', path: '/contact' },
    ];

    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
            },
        }),
    };

    const handleNavClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Box sx={ { background: `linear-gradient(135deg, ${theme.palette.surface.dark} 0%, ${theme.palette.surface.deep} 100%)`, color: theme.palette.primary.contrastText, py: { xs: 8, md: 10 }, px: 2 } }>
            <Container maxWidth="lg">
                <Grid container spacing={ 5 } sx={ { justifyContent: 'space-between' } }>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <motion.div variants={ footerVariants } initial="hidden" whileInView="visible" viewport={ { once: true } } custom={ 0 }>
                            <Typography variant="h5" gutterBottom sx={ { fontFamily: 'Cormorant Garamond', fontWeight: 700 } }>
                                Chaitali Parlour
                            </Typography>
                            <Typography variant="body2" sx={ { opacity: 0.9 } }>
                                Beauty that makes you glow. Your ultimate destination for professional hair care and skin care services at the best ladies parlour in Pune.
                            </Typography>
                            <Box sx={ { mt: 2, display: 'flex', alignItems: 'center', gap: 1.25 } }>
                                <IconButton
                                    color="inherit"
                                    component={ motion.a }
                                    whileHover={ { y: -3, scale: 1.06 } }
                                    whileTap={ { scale: 0.96 } }
                                    href="https://www.facebook.com/profile.php?id=100014868848537"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Facebook page"
                                    sx={ {
                                        border: `1px solid ${theme.palette.primary.light}`,
                                        backgroundColor: 'rgba(255,255,255,0.04)',
                                        transition: 'background-color 0.25s ease, border-color 0.25s ease',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255,255,255,0.10)',
                                            borderColor: theme.palette.secondary.light,
                                        },
                                    } }
                                >
                                        <FacebookIcon />
                                </IconButton>
                                <IconButton
                                    color="inherit"
                                    component={ motion.a }
                                    whileHover={ { y: -3, scale: 1.06 } }
                                    whileTap={ { scale: 0.96 } }
                                    href="https://www.instagram.com/nilavatichavan/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram page"
                                    sx={ {
                                        border: `1px solid ${theme.palette.primary.light}`,
                                        backgroundColor: 'rgba(255,255,255,0.04)',
                                        transition: 'background-color 0.25s ease, border-color 0.25s ease',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255,255,255,0.10)',
                                            borderColor: theme.palette.secondary.light,
                                        },
                                    } }
                                >
                                    <InstagramIcon />
                                </IconButton>
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <motion.div variants={ footerVariants } initial="hidden" whileInView="visible" viewport={ { once: true } } custom={ 1 }>
                            <Typography variant="h6" gutterBottom sx={ { fontFamily: 'Cormorant Garamond', fontWeight: 600 } }>
                                Quick Links
                            </Typography>
                            {quickLinks.map((link) => (
                                <Link
                                    key={ link.path }
                                    component={ RouterLink }
                                    to={ link.path }
                                    onClick={ handleNavClick }
                                    color="inherit"
                                    sx={ { display: 'block', mb: 1, textDecoration: 'none', '&:hover': { color: theme.palette.secondary.light } } }
                                >
                                    { link.label }
                                </Link>
                            ))}
                        </motion.div>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <motion.div variants={ footerVariants } initial="hidden" whileInView="visible" viewport={ { once: true } } custom={ 2 }>
                            <Typography variant="h6" gutterBottom sx={ { fontFamily: 'Cormorant Garamond', fontWeight: 600 } }>
                                Contact Us
                            </Typography>
                            <Typography variant="body2" sx={ { display: 'flex', alignItems: 'center', mb: 1.5, opacity: 0.9 } }>
                                <LocationOnIcon sx={ { mr: 1.5 } } /> A 502, Skylish Avenue, Jambe Rd, Tajane Wasti, Punawale, Pune, Maharashtra 411033
                            </Typography>
                            <Typography variant="body2" sx={ { display: 'flex', alignItems: 'center', mb: 1.5, opacity: 0.9 } }>
                                <PhoneIcon sx={ { mr: 1.5 } } /> +91-9130008625
                            </Typography>
                            <Typography variant="body2" sx={ { display: 'flex', alignItems: 'center', mb: 1.5, opacity: 0.9 } }>
                                <EmailIcon sx={ { mr: 1.5 } } /> chaitali.parlour.pune@gmail.com
                            </Typography>
                            <Typography variant="body2" sx={ { display: 'flex', alignItems: 'center', mb: 1.5, opacity: 0.9 } }>
                                <AccessTimeIcon sx={ { mr: 1.5 } } /> Mon-Sun: 10:00 AM - 7:00 PM
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>
                <Divider sx={ { my: 6, borderColor: 'rgba(255, 255, 255, 0.2)' } } />
                <Box sx={ { textAlign: 'center' } }>
                    <Typography variant="body2" sx={ { opacity: 0.8 } }>
                        &copy; { new Date().getFullYear() } Chaitali Parlour. All rights reserved.
                    </Typography>

                </Box>
            </Container>
        </Box>
    );
};

export default memo(Footer);
