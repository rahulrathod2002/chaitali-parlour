import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    useTheme,
    CircularProgress, // New import for loading state
} from '@mui/material';
import { AccessTime as AccessTimeIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import offersFromFile from '../data/offers.json';
const offersData = offersFromFile.offers;
import CardMediaWithFallback from '../components/common/CardMediaWithFallback';
import { staggerContainer, fadeIn } from '../utils/motion'; // New import for reusable motion variants

// Reusable CountdownTimer component with improved logic
const CountdownTimer = ({ expiryDate }) => {
    const theme = useTheme();
    const [ timeLeft, setTimeLeft ] = useState(null);
    const [ isExpired, setIsExpired ] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const difference = +new Date(expiryDate) - +new Date();
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setIsExpired(true);
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [ expiryDate ]);

    if (isExpired || !timeLeft) {
        return (
            <Box sx={ { display: 'inline-flex', alignItems: 'center', bgcolor: theme.palette.error.main, color: theme.palette.error.contrastText, p: 1, borderRadius: 1 } }>
                <Typography variant="body2" sx={ { fontWeight: 'bold' } }>This offer has expired!</Typography>
            </Box>
        );
    }

    return (
        <Box sx={ { display: 'inline-flex', alignItems: 'center', bgcolor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, p: 1, borderRadius: 1, boxShadow: theme.shadows[ 1 ] } }>
            <AccessTimeIcon sx={ { mr: 1, fontSize: '1.2rem' } } />
            { Object.entries(timeLeft).map(([ key, value ]) => (
                <Typography key={ key } variant="body2" component="span" sx={ { mx: 0.5, fontWeight: 'bold', textTransform: 'capitalize' } }>
                    { value } { key }{ " " }
                </Typography>
            )) }
        </Box>
    );
};

const Offers = () => {
    const theme = useTheme();

    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={ staggerContainer(0.1, 0.2) }
        >
            <SEOHead
                title="Special Offers | Best Parlour Near Me in Pune"
                description="Discover exclusive special offers on professional hair care and skin care services at Chaitali Beauty Parlour, the best ladies parlour in Pune."
                keywords="beauty parlour offers, salon discounts, special packages, festival offers, best parlour near me, ladies parlour Pune"
                canonical="https://chaitali-parlour.netlify.app/offers"
                structuredData={ {
                    "@type": "OfferCatalog",
                    "name": "Chaitali Parlour Special Offers",
                    "itemListElement": offersData.map(offer => ({
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": offer.title,
                            "description": offer.description
                        },
                        "validThrough": offer.expiry ? new Date(offer.expiry).toISOString() : undefined,
                        "url": `https://chaitali-parlour.netlify.app${offer.link}`
                    }))
                } }
            />

            <Box
                sx={ {
                    pt: 12,
                    pb: 8,
                    background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
                } }
            >
                <Container maxWidth="lg">
                    <motion.div variants={ fadeIn("up", "tween", 0, 0.7) }>
                        <Typography
                            variant="h2"
                            align="center"
                            gutterBottom
                            sx={ { color: theme.palette.primary.contrastText, mb: 2, textShadow: '1px 1px 3px rgba(0,0,0,0.2)' } }
                        >
                            Our Special Offers
                        </Typography>
                        <Typography
                            variant="body1"
                            align="center"
                            color="primary.contrastText"
                            paragraph
                            sx={ { mb: 6 } }
                        >
                            Unlock amazing deals and pamper yourself with our exclusive packages.
                        </Typography>
                    </motion.div>

                    <Grid container spacing={ 5 } justifyContent="center">
                        { offersData.map((offer, index) => (
                            <Grid item xs={ 12 } key={ offer.id }>
                                <motion.div
                                    variants={ fadeIn(index % 2 === 0 ? "right" : "left", "tween", 0, 0.7) }
                                    viewport={ { once: true, amount: 0.3 } }
                                >
                                    <Card
                                        sx={ {
                                            display: 'flex',
                                            flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                            borderRadius: 4,
                                            boxShadow: theme.shadows[ 10 ],
                                            overflow: 'hidden',
                                            transition: 'transform 0.3s ease-in-out',
                                            '&:hover': {
                                                transform: 'scale(1.01)',
                                            },
                                        } }
                                    >
                                        <CardMediaWithFallback
                                            component="img"
                                            sx={ { width: { xs: '100%', md: 400 }, height: { xs: 250, md: 'auto' }, objectFit: 'cover' } }
                                            src={ offer.image }
                                            alt={ offer.title }
                                        />
                                        <CardContent sx={ { flex: 1, p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' } }>
                                            <Typography variant="h3" gutterBottom sx={ { fontFamily: 'Cormorant Garamond' } }>
                                                { offer.title }
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary" paragraph sx={ { flexGrow: 1, fontSize: '1.1rem' } }>
                                                { offer.description }
                                            </Typography>
                                            { offer.expiry && (
                                                <Box sx={ { mb: 3 } }>
                                                    <CountdownTimer expiryDate={ offer.expiry } />
                                                </Box>
                                            ) }
                                            <motion.div whileHover={ { scale: 1.02 } } whileTap={ { scale: 0.98 } }>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    component={ RouterLink }
                                                    to={ offer.link }
                                                    size="large"
                                                    sx={ { py: 1.5, mt: 'auto' } }
                                                >
                                                    { offer.cta }
                                                </Button>
                                            </motion.div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        )) }
                    </Grid>
                </Container>
            </Box>
        </motion.div>
    );
};

export default Offers;