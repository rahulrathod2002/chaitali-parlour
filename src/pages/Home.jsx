import React, { lazy, Suspense } from 'react';
import { Container, Typography, Box, Grid, Button, useTheme, Card, CardContent, CircularProgress } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { InfoOutlined as InfoOutlinedIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import Hero from '../components/hero/Hero';
import ServiceCard from '../components/services/ServiceCard';
import { servicesData } from '../data/services';
import { testimonialsData } from '../data/testimonials';
import offersFromFile from '../data/offers.json';
const offersData = offersFromFile.offers;
import CardMediaWithFallback from '../components/common/CardMediaWithFallback';
import { staggerContainer, fadeIn } from '../utils/motion'; // Import reusable animation variants
// import parlourBannerJpg from '../../public/parlour-banner.jpg'; // Import parlourBanner JPG
// import parlourBannerPng from '../../public/parlour-banner.png'; // Import parlourBanner PNG

// Lazy load components that are below the fold
const TestimonialCarousel = lazy(() => import('../components/testimonials/TestimonialCarousel'));
const TrustBadges = lazy(() => import('../components/common/TrustBadges'));

// New component for the Offer Card
const OfferCard = ({ offer, index }) => {
    const theme = useTheme();
    return (
        <motion.div
            variants={ fadeIn("up", "tween", index * 0.1, 0.6) }
            initial="hidden"
            whileInView="show"
            viewport={ { once: true, amount: 0.3 } }
        >
            <Card
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    boxShadow: theme.shadows[ 6 ], // Increased shadow for more depth
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-10px) scale(1.02)', // More pronounced lift and scale
                        boxShadow: theme.shadows[ 10 ],
                    },
                } }
            >
                <CardMediaWithFallback
                    component="img"
                    loading="lazy"
                    sx={ {
                        width: { xs: '100%', sm: 180 },
                        height: { xs: 150, sm: 'auto' },
                        objectFit: 'cover',
                    } }
                    src={ offer.image }
                    alt={ `${offer.title} - Chaitali Beauty Parlour Offer` }
                />
                <CardContent sx={ { flex: '1 0 auto', p: 3 } }>
                    <Typography variant="h5" sx={ { fontFamily: 'Cormorant Garamond' } }>
                        { offer.title }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={ { mb: 1 } }>
                        { offer.description }
                    </Typography>
                    { offer.expiry && (
                        <Typography variant="caption" color="error" sx={ { display: 'block', mb: 1, fontWeight: 'bold' } }>
                            Expires: { new Date(offer.expiry).toLocaleDateString() }
                        </Typography>
                    ) }
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        component={ RouterLink }
                        to={ offer.link }
                        sx={ { mt: 'auto' } } // Pushes button to the bottom
                    >
                        { offer.cta }
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    );
};

const Home = () => {
    const theme = useTheme();

    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={ staggerContainer(0.1, 0.2) }
        >
            <SEOHead
                title="Chaitali Beauty Parlour – Best Beauty Parlour in Pune | Bridal Makeup & Facials"
                description="Looking for the best beauty parlour near me? Visit Chaitali Beauty Parlour in Pune for bridal makeup, facials, hair styling & more."
                keywords="best parlour near me, Chaitali Beauty Parlour, ladies parlour Pune"
                canonical="https://chaitali-parlour.netlify.app/"
                structuredData={ {
                    "@context": "http://schema.org",
                    "@type": "BeautySalon",
                    "name": "Chaitali Beauty Parlour",
                    "alternateName": "Chaitali Parlour",
                    "image": "https://chaitali-parlour.netlify.app/parlour-banner.jpg",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "1st Floor Dnyandeep Bungalow, Opposite Brick Castle, Behind Bhosale Garden, Savtanagari, Hadapsar",
                        "addressLocality": "Pune",
                        "addressRegion": "Maharashtra",
                        "postalCode": "411028",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 18.6324026,
                        "longitude": 73.73251
                    },
                    "url": "https://chaitali-parlour.netlify.app/",
                    "telephone": "+919890818752",
                    "openingHoursSpecification": [
                        {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday"
                            ],
                            "opens": "10:00",
                            "closes": "21:00"
                        }
                    ],
                    "hasMap": "https://maps.app.goo.gl/vjFdhjkNNBPe7cSg9"
                } }
            />
            <Hero />
            <Container maxWidth="lg" sx={ { my: 8 } }>
                <motion.div
                    variants={ fadeIn("up", "tween", 0, 0.7) }
                    initial="hidden"
                    whileInView="show"
                    viewport={ { once: true, amount: 0.2 } }
                >
                    <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.text.primary } }>
                        Our Signature Services
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={ { mb: 4, fontWeight: 'normal' } }>
                        Expert skin care and facial services in Pune, delivered at the best ladies parlour near you.
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

            <Box sx={ {
                position: 'relative',
                py: 8,
                backgroundImage: {
                    xs: `url(/parlour-banner.png)`,
                    md: `url(/parlour-banner.jpg)`,
                },
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    zIndex: 1,
                },
            } }>
                <Suspense fallback={ <Box sx={ { display: 'flex', justifyContent: 'center', p: 4 } }><CircularProgress color="primary" /></Box> }>
                    <Container maxWidth="lg" sx={ { position: 'relative', zIndex: 2, pb: 8 } }>
                        <motion.div
                            variants={ fadeIn("up", "tween", 0, 0.7) }
                            initial="hidden"
                            whileInView="show"
                            viewport={ { once: true, amount: 0.2 } }
                        >
                            <Typography variant="h2" align="center" gutterBottom sx={ { color: 'white', mb: 6 } }>
                                What Our Clients Say
                            </Typography>
                        </motion.div>
                        <TestimonialCarousel testimonials={ testimonialsData } />
                    </Container>
                    <Box sx={ { color: 'white', position: 'relative', zIndex: 2 } }>
                        <TrustBadges />
                    </Box>
                </Suspense>
            </Box>

            <Container maxWidth="lg" sx={ { my: 8 } }>
                <motion.div
                    variants={ fadeIn("up", "tween", 0, 0.7) }
                    initial="hidden"
                    whileInView="show"
                    viewport={ { once: true, amount: 0.2 } }
                >
                    <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.text.primary, mb: 4 } }>
                        Special Offers
                    </Typography>
                </motion.div>
                <Grid container spacing={ 4 } justifyContent="center">
                    { offersData.slice(0, 2).map((offer, index) => (
                        <Grid item xs={ 12 } md={ 6 } key={ index }>
                            <OfferCard offer={ offer } index={ index } />
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