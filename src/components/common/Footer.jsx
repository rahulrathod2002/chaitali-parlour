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
import {
    Phone as PhoneIcon,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    LocationOn as LocationOnIcon,
    Email as EmailIcon,
    AccessTime as AccessTimeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
    const theme = useTheme();

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

    return (
        <Box sx={{ background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`, color: theme.palette.primary.contrastText, py: 8, px: 2 }}>
            <Container maxWidth="lg">
                <Grid container spacing={5} justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                        <motion.div variants={footerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
                            <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Cormorant Garamond', fontWeight: 700 }}>
                                Chaitali Parlour
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                Beauty that makes you glow. Your ultimate destination for professional hair care and skin care services at the best ladies parlour in Pune.
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <IconButton color="inherit" href="https://www.facebook.com/profile.php?id=100014868848537" target="_blank" aria-label="Facebook page" sx={{ border: `1px solid ${theme.palette.primary.light}`, mr: 1 }}>
                                        <FacebookIcon />
                                    </IconButton>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    <IconButton color="inherit" href="https://www.instagram.com/nilavatichavan/" target="_blank" aria-label="Instagram page" sx={{ border: `1px solid ${theme.palette.primary.light}` }}>
                                        <InstagramIcon />
                                    </IconButton>
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}>
                        <motion.div variants={footerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
                            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Cormorant Garamond', fontWeight: 600 }}>
                                Quick Links
                            </Typography>
                            <Link component={RouterLink} to="/services" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { color: theme.palette.secondary.light } }}>
                                Services
                            </Link>
                            <Link component={RouterLink} to="/offers" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { color: theme.palette.secondary.light } }}>
                                Special Offers
                            </Link>
                            <Link component={RouterLink} to="/testimonials" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { color: theme.palette.secondary.light } }}>
                                Testimonials
                            </Link>
                            <Link component={RouterLink} to="/blog" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { color: theme.palette.secondary.light } }}>
                                Blog
                            </Link>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <motion.div variants={footerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
                            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Cormorant Garamond', fontWeight: 600 }}>
                                Contact Us
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1.5, opacity: 0.9 }}>
                                <LocationOnIcon sx={{ mr: 1.5 }} /> A 502, Skylish Avenue, Jambe Rd, Tajane Wasti, Punawale, Pune, Maharashtra 411033
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1.5, opacity: 0.9 }}>
                                <PhoneIcon sx={{ mr: 1.5 }} /> +91-9130008625
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1.5, opacity: 0.9 }}>
                                <EmailIcon sx={{ mr: 1.5 }} /> chaitali.parlour.pune@gmail.com
                            </Typography>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1.5, opacity: 0.9 }}>
                                <AccessTimeIcon sx={{ mr: 1.5 }} /> Mon-Sun: 10:00 AM - 8:00 PM
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.2)' }} />
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        &copy; {new Date().getFullYear()} Chaitali Parlour. All rights reserved.
                    </Typography>
                    <Link href="/admin" color="inherit" sx={{
                        display: 'block',
                        mt: 2,
                        fontSize: '0.75rem',
                        opacity: 0.6,
                        textDecoration: 'none',
                        '&:hover': {
                            opacity: 1,
                            textDecoration: 'underline'
                        }
                    }}>
                        Admin Login
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default memo(Footer);