import React from 'react';
import { Container, Typography, Box, Grid, Button, useTheme, Card, CardMedia, CardContent } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { InfoOutlined as InfoOutlinedIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import Hero from '../components/hero/Hero';
import ServiceCard from '../components/services/ServiceCard';
import TestimonialCarousel from '../components/testimonials/TestimonialCarousel';
import TrustBadges from '../components/common/TrustBadges';
import { servicesData } from '../data/services';
import { testimonialsData } from '../data/testimonials';
import { offersData } from '../data/offers';
import CardMediaWithFallback from '../components/common/CardMediaWithFallback';

const Home = () => {
    const theme = useTheme();
    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 0.5 } }
        >
            <SEOHead
                title="Chaitali Parlour | Beauty that makes you glow."
                description="Pune's premier ladies' beauty parlour offering professional hair care, skin treatments, bridal packages, and more. Experience beauty that makes you glow."
                keywords="chaitali parlour, beauty parlour pune, ladies parlour, hair care, skin care, bridal makeup, facials, grooming services, best parlour pune"
                canonical="https://www.chaitaliparlour.com"
                structuredData={ {
                    "@type": "LocalBusiness",
                    "name": "Chaitali Parlour",
                    "description": "Pune's premier ladies' beauty parlour offering professional hair care, skin treatments, bridal packages, and more.",
                    "slogan": "Beauty that makes you glow.",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Special Offers & Packages",
                        "itemListElement": offersData.map(offer => ({
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": offer.title
                            }
                        }))
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": (testimonialsData.reduce((acc, curr) => acc + curr.rating, 0) / testimonialsData.length).toFixed(1),
                        "reviewCount": testimonialsData.length
                    },
                    "priceRange": "$$",
                    "knowsAbout": servicesData.map(service => ({ "@type": "Service", "name": service.name }))
                } }
            />
            <Hero />
            <Container maxWidth="lg" sx={ { my: 8 } }>
                <motion.div
                    initial={ { y: 50, opacity: 0 } }
                    whileInView={ { y: 0, opacity: 1 } }
                    viewport={ { once: true, amount: 0.2 } }
                    transition={ { duration: 0.7 } }
                >
                    <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.text.primary, mb: 4 } }>
                        Our Signature Services
                    </Typography>
                </motion.div>
                <Box sx={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 } }>
                    { servicesData.slice(0, 4).map((service, index) => (
                        <ServiceCard key={ index } service={ service } />
                    )) }
                </Box>
                <Box sx={ { mt: 6, textAlign: 'center' } }>
                    <motion.div whileHover={ { scale: 1.05 } } whileTap={ { scale: 0.95 } }>
                        <Button
                            variant="outlined"
                            color="primary"
                            component={ RouterLink }
                            to="/services"
                            size="large"
                            endIcon={ <InfoOutlinedIcon /> }
                        >
                            View All Services
                        </Button>
                    </motion.div>
                </Box>
            </Container>
            <Box sx={ { bgcolor: theme.palette.background.paper, py: 8 } }>
                <Container maxWidth="lg">
                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        whileInView={ { y: 0, opacity: 1 } }
                        viewport={ { once: true, amount: 0.2 } }
                        transition={ { duration: 0.7 } }
                    >
                        <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.text.primary, mb: 4 } }>
                            What Our Clients Say
                        </Typography>
                    </motion.div>
                    <TestimonialCarousel testimonials={ testimonialsData } />
                </Container>
            </Box>
            <TrustBadges />
            <Container maxWidth="lg" sx={ { my: 8 } }>
                <motion.div
                    initial={ { y: 50, opacity: 0 } }
                    whileInView={ { y: 0, opacity: 1 } }
                    viewport={ { once: true, amount: 0.2 } }
                    transition={ { duration: 0.7 } }
                >
                    <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.text.primary, mb: 4 } }>
                        Special Offers
                    </Typography>
                </motion.div>
                <Grid container spacing={ 4 }>
                    { offersData.slice(0, 2).map((offer, index) => (
                        <Grid item xs={ 12 } md={ 6 } key={ index }>
                            <motion.div
                                initial={ { y: 50, opacity: 0 } }
                                whileInView={ { y: 0, opacity: 1 } }
                                viewport={ { once: true, amount: 0.3 } }
                                transition={ { duration: 0.5, delay: index * 0.1 } }
                            >
                                <Card sx={ { display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, boxShadow: theme.shadows[ 1 ], borderRadius: 3 } }>
                                    <CardMediaWithFallback
                                        component="img"
                                        sx={ { width: { xs: '100%', sm: 180 }, height: { xs: 150, sm: 'auto' }, objectFit: 'cover' } }
                                        src={ offer.image }
                                        alt={ offer.title }
                                    />
                                    <CardContent sx={ { flex: '1 0 auto' } }>
                                        <Typography variant="h5" sx={ { fontFamily: 'Cormorant Garamond' } }>{ offer.title }</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={ { mb: 1 } }>
                                            { offer.description }
                                        </Typography>
                                        { offer.expiry && (
                                            <Typography variant="caption" color="error" sx={ { display: 'block', mb: 1 } }>
                                                Expires: { new Date(offer.expiry).toLocaleDateString() }
                                            </Typography>
                                        ) }
                                        <Button variant="contained" color="primary" size="small" component={ RouterLink } to={ offer.link }>
                                            { offer.cta }
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    )) }
                </Grid>
                <Box sx={ { mt: 6, textAlign: 'center' } }>
                    <motion.div whileHover={ { scale: 1.05 } } whileTap={ { scale: 0.95 } }>
                        <Button
                            variant="outlined"
                            color="primary"
                            component={ RouterLink }
                            to="/offers"
                            size="large"
                            endIcon={ <InfoOutlinedIcon /> }
                        >
                            View All Offers
                        </Button>
                    </motion.div>
                </Box>
            </Container>
        </motion.div>
    );
};

export default Home;
