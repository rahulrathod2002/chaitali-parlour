import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Avatar,
    Rating,
    Box,
    useTheme,
    Grid
} from '@mui/material';
import { motion } from 'framer-motion';
import { Carousel } from 'nuka-carousel';
import { Star as StarIcon } from '@mui/icons-material';

const TestimonialCarousel = ({ testimonials }) => {
    const theme = useTheme();

    return (
        <Carousel
            slidesToShow={ 1 }
            wrapAround
            renderCenterLeftControls={ ({ previousSlide }) => null } // optional controls
            renderCenterRightControls={ ({ nextSlide }) => null }
            renderBottomCenterControls={ ({ slideCount, currentSlide, goToSlide }) => (
                <Box sx={ { display: 'flex', justifyContent: 'center', mt: 3, gap: 1 } }>
                    { Array.from({ length: slideCount }).map((_, index) => (
                        <Box
                            key={ index }
                            onClick={ () => goToSlide(index) }
                            sx={ {
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: currentSlide === index ? theme.palette.primary.main : theme.palette.text.disabled,
                                cursor: 'pointer',
                                transition: '0.3s all',
                            } }
                        />
                    )) }
                </Box>
            ) }
        >
            { testimonials.map((testimonial, index) => (
                <motion.div
                    key={ index }
                    initial={ { opacity: 0, y: 20 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.6, delay: index * 0.1 } }
                >
                    <Card
                        sx={ {
                            p: { xs: 3, sm: 5 },
                            borderRadius: 4,
                            minHeight: 280,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            boxShadow: theme.shadows[ 6 ],
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-8px) scale(1.02)',
                                boxShadow: theme.shadows[ 10 ],
                            },
                            textAlign: 'center',
                        } }
                    >
                        <Avatar
                            src={ testimonial.avatar }
                            alt={ testimonial.name }
                            sx={ {
                                width: { xs: 60, sm: 90 },
                                height: { xs: 60, sm: 90 },
                                mx: 'auto',
                                mb: 2,
                                border: `3px solid ${theme.palette.primary.main}`,
                            } }
                        />
                        <Rating
                            name="read-only"
                            value={ testimonial.rating }
                            readOnly
                            sx={ { mb: 2 } }
                            emptyIcon={ <StarIcon style={ { opacity: 0.4 } } fontSize="inherit" /> }
                        />
                        <Typography
                            variant="body1"
                            sx={ {
                                fontStyle: 'italic',
                                mb: 3,
                                color: theme.palette.text.primary,
                                lineHeight: 1.6,
                                px: { xs: 1, sm: 4 },
                            } }
                        >
                            "{ testimonial.review }"
                        </Typography>
                        <Box>
                            <Typography
                                variant="h6"
                                color={ theme.palette.primary.main }
                                sx={ {
                                    fontFamily: 'Cormorant Garamond',
                                    fontWeight: 600,
                                    letterSpacing: 0.5,
                                } }
                            >
                                - { testimonial.name }
                            </Typography>
                            { testimonial.designation && (
                                <Typography variant="body2" color="text.secondary">
                                    { testimonial.designation }
                                </Typography>
                            ) }
                        </Box>
                    </Card>
                </motion.div>
            )) }
        </Carousel>
    );
};

export default TestimonialCarousel;
