import React from 'react';
import { Box, Container, Rating, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import TestimonialCarousel from '../components/testimonials/TestimonialCarousel';
import { testimonialsData } from '../data/testimonials';

const Testimonials = () => {
    const theme = useTheme();
    const overallRating = (testimonialsData.reduce((acc, curr) => acc + curr.rating, 0) / testimonialsData.length).toFixed(1);

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Chaitali Parlour Testimonials',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: overallRating,
            reviewCount: testimonialsData.length,
        },
        review: testimonialsData.map((testimonial) => ({
            '@type': 'Review',
            reviewRating: {
                '@type': 'Rating',
                ratingValue: testimonial.rating,
            },
            author: {
                '@type': 'Person',
                name: testimonial.name,
            },
            reviewBody: testimonial.review,
        })),
    };

    return (
        <motion.div initial={ { opacity: 0 } } animate={ { opacity: 1 } } transition={ { duration: 0.5 } }>
            <SEOHead
                title="Client Testimonials | Chaitali Beauty Parlour Pune"
                description="Read glowing reviews from happy clients of Chaitali Beauty Parlour. See why we are considered the best parlour near you in Pune for professional hair and skin care."
                keywords="beauty parlour reviews, client testimonials, salon feedback, happy customers, top-rated parlour pune, chaitali beauty parlour, best parlour near me"
                canonical="https://chaitali-parlour.netlify.app/testimonials"
                structuredData={ structuredData }
            />

            <Box sx={ { pt: 14, pb: { xs: 8, md: 11 }, bgcolor: theme.palette.background.default } }>
                <Container maxWidth="lg">
                    <motion.div
                        initial={ { y: 40, opacity: 0 } }
                        animate={ { y: 0, opacity: 1 } }
                        transition={ { duration: 0.6 } }
                    >
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
                            Google Reviews
                        </Typography>
                        <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.text.primary, mb: 2 } }>
                            What Our Clients Say
                        </Typography>
                        <Typography variant="body1" align="center" color="text.secondary" sx={ { mb: 5, maxWidth: 760, mx: 'auto', lineHeight: 1.8 } }>
                            Real client feedback, balanced in clean equal-height cards so every review feels easy to scan and consistent across the page.
                        </Typography>
                    </motion.div>

                    <Box
                        sx={ {
                            mb: 6,
                            mx: 'auto',
                            maxWidth: 440,
                            p: { xs: 3, md: 4 },
                            textAlign: 'center',
                            borderRadius: 4,
                            background: `linear-gradient(180deg, ${theme.palette.primary.soft} 0%, rgba(255,255,255,0.9) 100%)`,
                            border: `1px solid ${theme.palette.divider}`,
                            boxShadow: theme.shadows[ 2 ],
                        } }
                    >
                        <Typography variant="h4" sx={ { fontFamily: 'Cormorant Garamond', mb: 1 } }>
                            Overall Rating: { overallRating }
                        </Typography>
                        <Rating name="overall-rating" value={ parseFloat(overallRating) } precision={ 0.1 } readOnly />
                        <Typography variant="body2" color="text.secondary" sx={ { mt: 1 } }>
                            Based on { testimonialsData.length } featured Google reviews
                        </Typography>
                    </Box>

                    <TestimonialCarousel testimonials={ testimonialsData } />
                </Container>
            </Box>
        </motion.div>
    );
};

export default Testimonials;
