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
import { Star as StarIcon, FormatQuote as FormatQuoteIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <SEOHead
                title="Client Testimonials | Chaitali Beauty Parlour Pune"
                description="Read glowing reviews from happy clients of Chaitali Beauty Parlour. See why we are considered the best parlour near you in Pune for professional hair and skin care."
                keywords="beauty parlour reviews, client testimonials, salon feedback, happy customers, top-rated parlour pune, chaitali beauty parlour, best parlour near me"
                canonical="https://chaitali-parlour.netlify.app/testimonials"
                structuredData={structuredData}
            />
            <Box sx={{ pt: 12, pb: 8, bgcolor: theme.palette.background.default }}>
                <Container maxWidth="lg"> {/* Changed to lg for better spacing on large screens */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Typography variant="h2" align="center" gutterBottom sx={{ color: theme.palette.text.primary, mb: 2 }}>
                            What Our Clients Say
                        </Typography>
                        <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
                            We're proud of the beautiful smiles and confidence we help create.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <Box sx={{ textAlign: 'center', mb: 6 }}>
                            <Typography variant="h4" component="span" sx={{ fontFamily: 'Cormorant Garamond' }}>
                                Overall Rating: {overallRating}
                            </Typography>
                            <Rating name="overall-rating" value={parseFloat(overallRating)} precision={0.1} readOnly sx={{ ml: 1, verticalAlign: 'middle' }} />
                            <Typography variant="body2" color="text.secondary">
                                (Based on {testimonialsData.length} reviews)
                            </Typography>
                        </Box>
                    </motion.div>

                    <Grid container spacing={4}>
                        {testimonialsData.map((testimonial, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    style={{ height: '100%' }}
                                >
                                    <Card sx={{
                                        p: 3,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        border: `1px solid ${theme.palette.divider}`,
                                        borderRadius: 3,
                                        boxShadow: 'none',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: theme.shadows[4],
                                        },
                                        position: 'relative',
                                        overflow: 'visible',
                                    }}>
                                        <FormatQuoteIcon sx={{
                                            position: 'absolute',
                                            top: 16,
                                            right: 16,
                                            fontSize: '4.5rem',
                                            color: theme.palette.primary.light,
                                            opacity: 0.15,
                                            transform: 'rotate(180deg)',
                                        }} />
                                        <Box sx={{ zIndex: 1 }}>
                                            <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', mb: 3 }}>
                                                "{testimonial.review}"
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto', zIndex: 1 }}>
                                            <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ mr: 2, width: 50, height: 50 }} />
                                            <Box>
                                                <Typography variant="h6" sx={{ fontFamily: 'Cormorant Garamond', lineHeight: 1.2 }}>{testimonial.name}</Typography>
                                                <Rating name={`testimonial-rating-${index}`} value={testimonial.rating} readOnly size="small" />
                                            </Box>
                                        </Box>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </motion.div>
    );
};

export default Testimonials;