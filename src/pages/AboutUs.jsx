import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    useTheme,
    Card,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import CallToActions from '../components/shared/CallToActions';
import CardMediaWithFallback from '../components/common/CardMediaWithFallback';
import chaitaliOwner from '../assets/images/chaitaliOwner.jpg';

const AboutUs = () => {
    const theme = useTheme();
    const journeyItems = [
        { year: '2017', title: 'Started Professional Training', description: 'Began focused training in cosmetology, skin care, and personal grooming fundamentals.' },
        { year: '2018', title: 'Hands-On Salon Experience', description: 'Built practical experience by working closely with clients and understanding real beauty care needs.' },
        { year: '2019', title: 'Certified In Core Beauty Services', description: 'Completed certifications in facial care, grooming, and essential salon service techniques.' },
        { year: '2020', title: 'Advanced Skin & Hair Learning', description: 'Expanded expertise in hair care treatments, hygiene-led service routines, and client consultation.' },
        { year: '2021', title: 'Chaitali Parlour Founded', description: 'Turned the dream into a dedicated beauty space focused on trust, comfort, and personalized care.' },
        { year: '2022', title: 'Trusted Local Client Base', description: 'Earned repeat clients through consistent service quality, a welcoming atmosphere, and reliable results.' },
        { year: '2024', title: 'Specialized Service Expansion', description: 'Strengthened offerings across beauty treatments, grooming, bridal-ready styling, and self-care services.' },
        { year: '2026', title: 'Became A Beauty Expert', description: 'Recognized as a beauty expert with years of practical experience, refined technique, and client-first service excellence.' },
    ];
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
            <Box sx={ { pt: 12, pb: 9, bgcolor: theme.palette.background.default } }>
                <Container maxWidth="lg">
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
                        <Grid size={{ xs: 12, md: 6 }}>
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
                        <Grid size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={ { x: 50, opacity: 0 } }
                                whileInView={ { x: 0, opacity: 1 } }
                                viewport={ { once: true, amount: 0.3 } }
                                transition={ { duration: 0.7, delay: 0.4 } }
                            >
                                <Typography variant="h4" gutterBottom sx={ { fontFamily: 'Cormorant Garamond', mb: 2 } }>
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
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <SpaIcon color="primary" sx={ { fontSize: 50, mb: 1 } } />
                                <Typography variant="h6" gutterBottom>Personalized Care</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tailoring every service to your unique needs and desires.
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <CleanHandsIcon color="primary" sx={ { fontSize: 50, mb: 1 } } />
                                <Typography variant="h6" gutterBottom>Uncompromised Hygiene</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Adhering to the highest standards of cleanliness and safety.
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 4 }}>
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
                        <Typography variant="h3" align="center" gutterBottom sx={ { fontFamily: 'Cormorant Garamond', mb: 2 } }>
                            Our Journey & Certifications
                        </Typography>
                        <Typography align="center" color="text.secondary" sx={ { maxWidth: 760, mx: 'auto', mb: 5, lineHeight: 1.8 } }>
                            A steady journey of training, certifications, hands-on care, and client trust that shaped Chaitali Parlour into a beauty space led by practical expertise.
                        </Typography>
                        <Box sx={ { position: 'relative', py: 1 } }>
                            <Grid container spacing={ 3 }>
                                { journeyItems.map((item, index) => (
                                    <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={ index }>
                                        <motion.div
                                            initial={ { opacity: 0, y: 36 } }
                                            whileInView={ { opacity: 1, y: 0 } }
                                            viewport={ { once: true, amount: 0.2 } }
                                            transition={ { duration: 0.55, delay: index * 0.08 } }
                                            style={ { height: '100%' } }
                                        >
                                            <Card sx={ { p: 3.25, height: '100%', boxShadow: theme.shadows[ 2 ], textAlign: 'left' } }>
                                                <Typography variant="overline" color="primary" sx={ { fontWeight: 700, letterSpacing: '0.14em' } }>{ item.year }</Typography>
                                                <Typography variant="h5" sx={ { fontFamily: 'Cormorant Garamond', mb: 1.25, mt: 0.5 } }>{ item.title }</Typography>
                                                <Typography variant="body2" color="text.secondary" sx={ { lineHeight: 1.75 } }>{ item.description }</Typography>
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
