import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    useTheme,
    Card,
} from '@mui/material';
import {
    Spa as SpaIcon,
    CleanHands as CleanHandsIcon,
    LocalFlorist as LocalFloristIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import CallToActions from '../components/shared/CallToActions';
import CardMediaWithFallback from '../components/common/CardMediaWithFallback';
import chaitaliOwner from '../assets/images/chaitaliOwner.jpg';

const AboutUs = () => {
    const theme = useTheme();
    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 0.5 } }
        >
            <SEOHead
                title="About Chaitali Beauty Parlour | Top Ladies Parlour in Pune"
                description="Learn about Chaitali Beauty Parlour, a leading ladies parlour in Pune. Our story, our mission, and our commitment to providing the best professional hair and skin care services."
                keywords="chaitali beauty parlour, ladies parlour Pune, about us, beauty salon story, women-led business, professional hair care Pune, skin care and facial services Pune"
                canonical="https://chaitali-parlour.netlify.app/about"
                structuredData={ {
                    "@type": "AboutPage",
                    "mainEntity": {
                        "@type": "BeautySalon",
                        "name": "Chaitali Beauty Parlour",
                        "description": "Chaitali Beauty Parlour is a leading ladies parlour in Pune, offering professional hair care and skin care services.",
                        "founder": {
                            "@type": "Person",
                            "name": "Chaitali",
                            "jobTitle": "Owner & Lead Beauty Expert"
                        }
                    }
                } }
            />
            <Box sx={ { pt: 12, pb: 8, bgcolor: theme.palette.background.default } }>
                <Container maxWidth="md">
                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        animate={ { y: 0, opacity: 1 } }
                        transition={ { duration: 0.7 } }
                    >
                        <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.text.primary, mb: 4 } }>
                            About Our Ladies Parlour in Pune
                        </Typography>
                    </motion.div>

                    <Grid container spacing={ 4 } alignItems="center" sx={ { mb: 6 } }>
                        <Grid item xs={ 12 } md={ 6 }>
                            <motion.div
                                initial={ { x: -50, opacity: 0 } }
                                whileInView={ { x: 0, opacity: 1 } }
                                viewport={ { once: true, amount: 0.3 } }
                                transition={ { duration: 0.7, delay: 0.2 } }
                            >
                                <CardMediaWithFallback
                                    component="img"
                                    src={ chaitaliOwner || "https://placehold.co/600x400/FFC0CB/FFFFFF?text=Chaitali+Owner" }
                                    alt="Chaitali, Owner of Chaitali Beauty Parlour in Pune"
                                    sx={ { borderRadius: 3, boxShadow: theme.shadows[ 1 ] } }
                                />
                            </motion.div>
                        </Grid>
                        <Grid item xs={ 12 } md={ 6 }>
                            <motion.div
                                initial={ { x: 50, opacity: 0 } }
                                whileInView={ { x: 0, opacity: 1 } }
                                viewport={ { once: true, amount: 0.3 } }
                                transition={ { duration: 0.7, delay: 0.4 } }
                            >
                                <Typography variant="h4" gutterBottom sx={ { fontFamily: 'Cormorant Garamond' } }>
                                    Meet Nilavati: Expert at the Best Parlour Near You
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Welcome to Chaitali Beauty Parlour, a dream brought to life by Nilavati, a passionate and dedicated beauty expert. Her journey began with a simple belief: every woman deserves to feel beautiful, confident, and empowered.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    As a premier ladies parlour in Pune, we have created a space where beauty meets comfort, where clients receive personalized attention, and where hygiene and premium products for skin care and facial services are paramount.
                                </Typography>
                            </motion.div>
                        </Grid>
                    </Grid>

                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        whileInView={ { y: 0, opacity: 1 } }
                        viewport={ { once: true, amount: 0.2 } }
                        transition={ { duration: 0.7 } }
                        sx={ { my: 6 } }
                    >
                        <Typography variant="h3" align="center" gutterBottom sx={ { fontFamily: 'Cormorant Garamond', mb: 3 } }>
                            Our Mission & Values
                        </Typography>
                        <Grid container spacing={ 4 } textAlign="center">
                            <Grid item xs={ 12 } sm={ 4 }>
                                <SpaIcon color="primary" sx={ { fontSize: 50, mb: 1 } } />
                                <Typography variant="h6" gutterBottom>Personalized Care</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tailoring every service to your unique needs and desires.
                                </Typography>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 4 }>
                                <CleanHandsIcon color="primary" sx={ { fontSize: 50, mb: 1 } } />
                                <Typography variant="h6" gutterBottom>Uncompromised Hygiene</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Adhering to the highest standards of cleanliness and safety.
                                </Typography>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 4 }>
                                <LocalFloristIcon color="primary" sx={ { fontSize: 50, mb: 1 } } />
                                <Typography variant="h6" gutterBottom>Premium Natural Products</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Using gentle, effective, and ethically sourced products.
                                </Typography>
                            </Grid>
                        </Grid>
                    </motion.div>

                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        whileInView={ { y: 0, opacity: 1 } }
                        viewport={ { once: true, amount: 0.2 } }
                        transition={ { duration: 0.7 } }
                        sx={ { my: 8 } }
                    >
                        <Typography variant="h3" align="center" gutterBottom sx={ { fontFamily: 'Cormorant Garamond', mb: 3 } }>
                            Our Journey & Certifications
                        </Typography>
                        <Box sx={ { position: 'relative', py: 4 } }>
                            <Box sx={ {
                                position: 'absolute',
                                left: '50%',
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: theme.palette.primary.light,
                                transform: 'translateX(-50%)',
                                display: { xs: 'none', sm: 'block' }
                            } } />
                            <Grid container spacing={ 4 }>
                                { [
                                    { year: '2017', title: 'Started Training', description: 'Began professional training in cosmetology and aesthetics.' },
                                    { year: '2019', title: 'Certified Expert', description: 'Achieved advanced certifications in skin care and hair care.' },
                                    { year: '2021', title: 'Chaitali Parlour Founded', description: 'Opened the doors to our first beauty parlour, a dream come true.' },
                                    { year: '2023', title: 'Expansion & Innovation', description: 'Expanded services and integrated modern techniques and eco-friendly practices.' },
                                ].map((item, index) => (
                                    <Grid item xs={ 12 } sm={ 6 } key={ index } sx={ { position: 'relative' } }>
                                        <motion.div
                                            initial={ { opacity: 0, x: index % 2 === 0 ? -50 : 50 } }
                                            whileInView={ { opacity: 1, x: 0 } }
                                            viewport={ { once: true, amount: 0.5 } }
                                            transition={ { duration: 0.6, delay: index * 0.1 } }
                                        >
                                            <Card sx={ { p: 3, borderRadius: 3, boxShadow: theme.shadows[ 1 ], textAlign: { xs: 'center', sm: 'left' }, mb: { xs: 2, sm: 0 } } }>
                                                <Typography variant="h6" color="primary" sx={ { mb: 1 } }>{ item.year }</Typography>
                                                <Typography variant="h5" sx={ { fontFamily: 'Cormorant Garamond', mb: 1 } }>{ item.title }</Typography>
                                                <Typography variant="body2" color="text.secondary">{ item.description }</Typography>
                                            </Card>
                                        </motion.div>
                                    </Grid>
                                )) }
                            </Grid>
                        </Box>
                    </motion.div>

                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        whileInView={ { y: 0, opacity: 1 } }
                        viewport={ { once: true, amount: 0.2 } }
                        transition={ { duration: 0.7, delay: 0.2 } }
                        style={ { textAlign: 'center', marginTop: theme.spacing(8) } }
                    >
                        <CallToActions />
                    </motion.div>
                </Container>
            </Box>
        </motion.div>
    );
};

export default AboutUs;