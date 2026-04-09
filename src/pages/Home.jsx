import React, { lazy, Suspense } from 'react';
import { Box, Button, Card, CardContent, CircularProgress, Container, Grid, Typography, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import Hero from '../components/hero/Hero';
import ServiceCard from '../components/services/ServiceCard';
import { servicesData } from '../data/services';
import { testimonialsData } from '../data/testimonials';
import offersFromFile from '../data/offers.json';
import CardMediaWithFallback from '../components/common/CardMediaWithFallback';
import { fadeIn, staggerContainer } from '../utils/motion';

const offersData = offersFromFile.offers;

const TestimonialCarousel = lazy(() => import('../components/testimonials/TestimonialCarousel'));
const TrustBadges = lazy(() => import('../components/common/TrustBadges'));

const sectionSx = {
    py: { xs: 8, md: 11 },
};

const OfferCard = ({ offer, index }) => {
    const theme = useTheme();

    return (
        <motion.div
            variants={ fadeIn('up', 'tween', index * 0.1, 0.6) }
            initial="hidden"
            whileInView="show"
            viewport={ { once: true, amount: 0.3 } }
            style={ { height: '100%' } }
        >
            <Card
                sx={ {
                    height: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    overflow: 'hidden',
                    position: 'relative',
                    borderRadius: 4,
                    border: `1px solid ${theme.palette.divider}`,
                    boxShadow: theme.shadows[ 4 ],
                    background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.surface.muted} 52%, rgba(255,255,255,0.96) 100%)`,
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(184,92,122,0.05) 45%, rgba(216,164,143,0.08) 100%)',
                        pointerEvents: 'none',
                    },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 18,
                        right: 18,
                        width: 110,
                        height: 110,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(184,92,122,0.16) 0%, rgba(184,92,122,0) 72%)',
                        pointerEvents: 'none',
                    },
                } }
            >
                <CardMediaWithFallback
                    component="img"
                    loading="lazy"
                    sx={ {
                        width: { xs: '100%', sm: 220, md: 240 },
                        minWidth: { sm: 220, md: 240 },
                        height: { xs: 220, sm: 'auto' },
                        alignSelf: 'stretch',
                        objectFit: 'cover',
                        filter: 'saturate(1.05)',
                    } }
                    src={ offer.image }
                    alt={ `${offer.title} - Chaitali Beauty Parlour Offer` }
                />
                <CardContent
                    sx={ {
                        flex: '1 1 auto',
                        width: '100%',
                        minWidth: 0,
                        p: { xs: 3, md: 4 },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        position: 'relative',
                        zIndex: 1,
                    } }
                >
                    <Box>
                        <Typography
                            variant="overline"
                            sx={ {
                                display: 'inline-block',
                                mb: 2,
                                px: 1.5,
                                py: 0.75,
                                borderRadius: '999px',
                                backgroundColor: theme.palette.primary.soft,
                                border: `1px solid ${theme.palette.divider}`,
                                color: theme.palette.primary.main,
                                fontWeight: 700,
                                letterSpacing: '0.16em',
                            } }
                        >
                            Special Offer
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={ {
                                fontFamily: 'Cormorant Garamond',
                                mb: 1.5,
                                lineHeight: 1.05,
                                fontSize: { xs: '1.8rem', md: '2.15rem' },
                            } }
                        >
                            { offer.title }
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={ { lineHeight: 1.8, mb: 2 } }>
                            { offer.description }
                        </Typography>
                        <Box
                            sx={ {
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
                                gap: 1.25,
                                width: '100%',
                            } }
                        >
                            <Box
                                sx={ {
                                    px: 1.5,
                                    py: 1.1,
                                    borderRadius: 3,
                                    backgroundColor: 'rgba(255,255,255,0.72)',
                                    border: `1px solid ${theme.palette.divider}`,
                                } }
                            >
                                <Typography variant="caption" sx={ { color: theme.palette.primary.main, fontWeight: 700, letterSpacing: '0.08em' } }>
                                    PREMIUM CARE
                                </Typography>
                            </Box>
                            <Box
                                sx={ {
                                    px: 1.5,
                                    py: 1.1,
                                    borderRadius: 3,
                                    backgroundColor: 'rgba(255,255,255,0.72)',
                                    border: `1px solid ${theme.palette.divider}`,
                                } }
                            >
                                <Typography variant="caption" sx={ { color: theme.palette.primary.main, fontWeight: 700, letterSpacing: '0.08em' } }>
                                    LIMITED SPOTS
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        component={ RouterLink }
                        to={ offer.link }
                        sx={ {
                            mt: 3.5,
                            alignSelf: 'flex-start',
                            px: 3.5,
                            py: 1.3,
                        } }
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
        <motion.div initial="hidden" animate="show" variants={ staggerContainer(0.1, 0.2) }>
            <SEOHead
                title="Chaitali Beauty Parlour - Best Beauty Parlour in Pune | Bridal Makeup & Facials"
                description="Looking for the best beauty parlour near me? Visit Chaitali Beauty Parlour in Pune for bridal makeup, facials, hair styling & more."
                keywords="best parlour near me, Chaitali Beauty Parlour, ladies parlour Pune"
                canonical="https://chaitali-parlour.netlify.app/"
                structuredData={ {
                    '@context': 'http://schema.org',
                    '@type': 'BeautySalon',
                    name: 'Chaitali Beauty Parlour',
                    alternateName: 'Chaitali Parlour',
                    image: 'https://chaitali-parlour.netlify.app/parlour-banner.jpg',
                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: '1st Floor Dnyandeep Bungalow, Opposite Brick Castle, Behind Bhosale Garden, Savtanagari, Hadapsar',
                        addressLocality: 'Pune',
                        addressRegion: 'Maharashtra',
                        postalCode: '411028',
                        addressCountry: 'IN',
                    },
                    geo: {
                        '@type': 'GeoCoordinates',
                        latitude: 18.6324026,
                        longitude: 73.73251,
                    },
                    url: 'https://chaitali-parlour.netlify.app/',
                    telephone: '+919890818752',
                    openingHoursSpecification: [
                        {
                            '@type': 'OpeningHoursSpecification',
                            dayOfWeek: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
                            opens: '10:00',
                            closes: '21:00',
                        },
                    ],
                    hasMap: 'https://maps.app.goo.gl/vjFdhjkNNBPe7cSg9',
                } }
            />

            <Hero />

            <Box sx={ sectionSx }>
                <Container maxWidth="lg">
                    <motion.div variants={ fadeIn('up', 'tween', 0, 0.7) } initial="hidden" whileInView="show" viewport={ { once: true, amount: 0.2 } }>
                        <Typography
                            variant="overline"
                            sx={ {
                                display: 'block',
                                textAlign: 'center',
                                color: theme.palette.primary.main,
                                fontWeight: 700,
                                letterSpacing: '0.18em',
                                mb: 1.5,
                            } }
                        >
                            Signature Care
                        </Typography>
                        <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.text.primary, mb: 2 } }>
                            Our Signature Services
                        </Typography>
                        <Typography variant="h6" align="center" color="text.secondary" sx={ { mb: 6, fontWeight: 'normal', maxWidth: 760, mx: 'auto', lineHeight: 1.75 } }>
                            Expert skin care, grooming, and bridal-ready beauty services delivered with the comfort, polish, and spacing rhythm of a premium studio experience.
                        </Typography>
                    </motion.div>

                    <Box
                        sx={ {
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(2, minmax(0, 1fr))',
                                lg: 'repeat(3, minmax(0, 1fr))',
                            },
                            gap: 4,
                            alignItems: 'stretch',
                        } }
                    >
                        { servicesData.slice(0, 6).map((service, index) => (
                            <Box key={ index } sx={ { minWidth: 0 } }>
                                <ServiceCard service={ service } />
                            </Box>
                        )) }
                    </Box>

                    <Box sx={ { mt: 6, textAlign: 'center' } }>
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
                    </Box>
                </Container>
            </Box>

            <Box
                sx={ {
                    ...sectionSx,
                    position: 'relative',
                    background: `linear-gradient(180deg, ${theme.palette.surface.dark} 0%, ${theme.palette.surface.deep} 100%)`,
                    color: theme.palette.primary.contrastText,
                    overflow: 'hidden',
                } }
            >
                <Box
                    sx={ {
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: {
                            xs: 'url(/parlour-banner.png)',
                            md: 'url(/parlour-banner.jpg)',
                        },
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.14,
                    } }
                />
                <Suspense fallback={ <Box sx={ { display: 'flex', justifyContent: 'center', p: 4 } }><CircularProgress color="primary" /></Box> }>
                    <Container maxWidth="lg" sx={ { position: 'relative', zIndex: 1 } }>
                        <motion.div variants={ fadeIn('up', 'tween', 0, 0.7) } initial="hidden" whileInView="show" viewport={ { once: true, amount: 0.2 } }>
                            <Typography
                                variant="overline"
                                sx={ {
                                    display: 'block',
                                    textAlign: 'center',
                                    color: theme.palette.secondary.light,
                                    fontWeight: 700,
                                    letterSpacing: '0.18em',
                                    mb: 1.5,
                                } }
                            >
                                Real Reviews
                            </Typography>
                            <Typography variant="h2" align="center" gutterBottom sx={ { color: 'white', mb: 2 } }>
                                What Our Clients Say
                            </Typography>
                            <Typography align="center" sx={ { color: 'rgba(255,255,255,0.76)', maxWidth: 760, mx: 'auto', mb: 6, lineHeight: 1.75 } }>
                                Genuine Google reviews from clients who visited Chaitali Beauty Parlour and loved the care, cleanliness, and final results.
                            </Typography>
                        </motion.div>
                        <TestimonialCarousel testimonials={ testimonialsData } />
                    </Container>
                    <Box sx={ { color: 'white', position: 'relative', zIndex: 1, mt: 7 } }>
                        <TrustBadges />
                    </Box>
                </Suspense>
            </Box>

            <Box sx={ { ...sectionSx, backgroundColor: theme.palette.surface.muted } }>
                <Container maxWidth="lg">
                    <motion.div variants={ fadeIn('up', 'tween', 0, 0.7) } initial="hidden" whileInView="show" viewport={ { once: true, amount: 0.2 } }>
                        <Typography
                            variant="overline"
                            sx={ {
                                display: 'block',
                                textAlign: 'center',
                                color: theme.palette.primary.main,
                                fontWeight: 700,
                                letterSpacing: '0.18em',
                                mb: 1.5,
                            } }
                        >
                            Limited Time
                        </Typography>
                        <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.text.primary, mb: 6 } }>
                            Special Offers
                        </Typography>
                    </motion.div>
                    <Grid container spacing={ 4 } sx={ { justifyContent: 'center' } }>
                        { offersData.slice(0, 2).map((offer, index) => (
                            <Grid size={{ xs: 12, md: 6 }} key={ index }>
                                <OfferCard offer={ offer } index={ index } />
                            </Grid>
                        )) }
                    </Grid>
                </Container>
            </Box>
        </motion.div>
    );
};

export default Home;
