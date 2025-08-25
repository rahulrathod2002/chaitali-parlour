import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    Avatar,
    Rating,
    useTheme,
} from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import TestimonialCarousel from '../components/testimonials/TestimonialCarousel';
import { testimonialsData } from '../data/testimonials'; // Ensure this is imported

const Testimonials = () => {
    const theme = useTheme();
    const overallRating = (testimonialsData.reduce((acc, curr) => acc + curr.rating, 0) / testimonialsData.length).toFixed(1);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Chaitali Parlour Testimonials",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": overallRating,
            "reviewCount": testimonialsData.length
        },
        "review": testimonialsData.map(t => ({
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating
            },
            "author": {
                "@type": "Person",
                "name": t.name
            },
            "reviewBody": t.review
        }))
    };

    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 0.5 } }
        >
            <SEOHead
                title="Client Testimonials | Chaitali Parlour - Hear From Our Happy Clients"
                description="Read glowing reviews and testimonials from satisfied clients of Chaitali Parlour. Discover why women love our beauty services."
                keywords="beauty parlour reviews, client testimonials, salon feedback, happy customers, top-rated parlour pune"
                canonical="https://www.chaitaliparlour.com/testimonials"
                structuredData={ structuredData }
            />
            <Box sx={ { pt: 12, pb: 8, bgcolor: theme.palette.background.default } }>
                <Container maxWidth="md">
                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        animate={ { y: 0, opacity: 1 } }
                        transition={ { duration: 0.7 } }
                    >
                        <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.text.primary, mb: 2 } }>
                            What Our Clients Say
                        </Typography>
                        <Typography variant="body1" align="center" color="text.secondary" paragraph sx={ { mb: 4 } }>
                            We're proud of the beautiful smiles and confidence we help create.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        whileInView={ { y: 0, opacity: 1 } }
                        viewport={ { once: true, amount: 0.2 } }
                        transition={ { duration: 0.7, delay: 0.1 } }
                    >
                        <Box sx={ { textAlign: 'center', mb: 4 } }>
                            <Typography variant="h4" component="span" sx={ { fontFamily: 'Cormorant Garamond' } }>
                                Overall Rating: { overallRating }
                            </Typography>
                            <Rating name="overall-rating" value={ parseFloat(overallRating) } precision={ 0.1 } readOnly sx={ { ml: 1, verticalAlign: 'middle' } } />
                            <Typography variant="body2" color="text.secondary">
                                (Based on { testimonialsData.length } reviews)
                            </Typography>
                        </Box>
                    </motion.div>

                    <TestimonialCarousel testimonials={ testimonialsData } />

                    <Grid container spacing={ 4 } sx={ { mt: 6 } }>
                        { testimonialsData.map((testimonial, index) => (
                            <Grid item xs={ 12 } md={ 6 } key={ index }>
                                <motion.div
                                    initial={ { y: 50, opacity: 0 } }
                                    whileInView={ { y: 0, opacity: 1 } }
                                    viewport={ { once: true, amount: 0.3 } }
                                    transition={ { duration: 0.5, delay: index * 0.1 } }
                                >
                                    <Card sx={ { p: 3, boxShadow: theme.shadows[ 1 ], borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column' } }>
                                        <Box sx={ { display: 'flex', alignItems: 'center', mb: 2 } }>
                                            <Avatar src={ testimonial.avatar } alt={ testimonial.name } sx={ { mr: 2 } } />
                                            <Box>
                                                <Typography variant="h6" sx={ { fontFamily: 'Cormorant Garamond' } }>{ testimonial.name }</Typography>
                                                <Rating name={ `testimonial-rating-${index}` } value={ testimonial.rating } readOnly size="small" />
                                            </Box>
                                        </Box>
                                        <Typography variant="body2" color="text.secondary" sx={ { flexGrow: 1 } }>
                                            "{ testimonial.review }"
                                        </Typography>
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

export default Testimonials;
