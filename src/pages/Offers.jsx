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
} from '@mui/material';
import { AccessTime as AccessTimeIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { offersData } from '../data/offers'; // Ensure this is imported
import CardMediaWithFallback from '../components/common/CardMediaWithFallback';

const Offers = () => {
    const theme = useTheme();

    const CountdownTimer = ({ expiryDate }) => {
        const calculateTimeLeft = () => {
            const difference = +new Date(expiryDate) - +new Date();
            let timeLeft = {};

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return timeLeft;
        };

        const [ timeLeft, setTimeLeft ] = useState(calculateTimeLeft());

        useEffect(() => {
            const timer = setTimeout(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);
            return () => clearTimeout(timer);
        });

        const timerComponents = [];
        Object.keys(timeLeft).forEach((interval) => {
            if (!timeLeft[ interval ]) {
                return;
            }
            timerComponents.push(
                <Typography key={ interval } variant="body2" component="span" sx={ { mx: 0.5, fontWeight: 'bold' } }>
                    { timeLeft[ interval ] } { interval }{ " " }
                </Typography>
            );
        });

        return (
            <Box sx={ { display: 'inline-flex', alignItems: 'center', bgcolor: theme.palette.secondary.light, color: theme.palette.text.primary, p: 1, borderRadius: 1 } }>
                <AccessTimeIcon sx={ { mr: 0.5 } } />
                { timerComponents.length ? timerComponents : <Typography variant="body2" sx={ { fontWeight: 'bold' } }>Expired!</Typography> }
            </Box>
        );
    };

    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 0.5 } }
        >
            <SEOHead
                title="Special Offers | Chaitali Parlour - Exclusive Beauty Deals"
                description="Discover exclusive special offers, seasonal packages, and discounts at Chaitali Parlour. Don't miss out on our limited-time beauty deals!"
                keywords="beauty parlour offers, salon discounts, special packages, festival offers, refer a friend, beauty deals pune"
                canonical="https://www.chaitaliparlour.com/offers"
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
                        "url": `https://www.chaitaliparlour.com${offer.link}`
                    }))
                } }
            />
            <Box sx={ { pt: 12, pb: 8, background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)` } }>
                <Container maxWidth="lg">
                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        animate={ { y: 0, opacity: 1 } }
                        transition={ { duration: 0.7 } }
                    >
                        <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.primary.contrastText, mb: 2, textShadow: '1px 1px 3px rgba(0,0,0,0.2)' } }>
                            Our Special Offers
                        </Typography>
                        <Typography variant="body1" align="center" color="primary.contrastText" paragraph sx={ { mb: 6 } }>
                            Unlock amazing deals and pamper yourself with our exclusive packages.
                        </Typography>
                    </motion.div>

                    <Grid container spacing={ 5 } justifyContent="center">
                        { offersData.map((offer, index) => (
                            <Grid item xs={ 12 } key={ offer.id }>
                                <motion.div
                                    initial={ { opacity: 0, x: index % 2 === 0 ? -100 : 100 } }
                                    whileInView={ { opacity: 1, x: 0 } }
                                    viewport={ { once: true, amount: 0.3 } }
                                    transition={ { duration: 0.7, delay: 0.2 } }
                                >
                                    <Card sx={ {
                                        display: 'flex',
                                        flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                                        borderRadius: 4, 
                                        background: 'rgba(255, 255, 255, 0.8)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        boxShadow: theme.shadows[10],
                                        overflow: 'hidden',
                                    } }>
                                        <CardMediaWithFallback
                                            component="img"
                                            sx={ { width: { xs: '100%', md: 400 }, height: { xs: 250, md: 'auto' }, objectFit: 'cover' } }
                                            src={ offer.image }
                                            alt={ offer.title }
                                        />
                                        <CardContent sx={ { flex: '1 0 auto', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' } }>
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
                                            <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}}>
                                                <Button variant="contained" color="primary" component={ RouterLink } to={ offer.link } size="large" sx={{py: 1.5}}>
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
