import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Avatar,
    Rating,
    Box,
    useTheme,
} from '@mui/material';
import { IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos, FiberManualRecord, Star as StarIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Carousel } from 'nuka-carousel';

const TestimonialCarousel = ({ testimonials }) => {
    const theme = useTheme();
    return (
        <Carousel
            slidesToShow={ 1 }
            wrapAround
            renderCenterLeftControls={ ({ previousSlide }) => (
                <IconButton onClick={ previousSlide } sx={ { color: theme.palette.primary.main } }>
                    <ArrowBackIosNew />
                </IconButton>
            ) }
            renderCenterRightControls={ ({ nextSlide }) => (
                <IconButton onClick={ nextSlide } sx={ { color: theme.palette.primary.main } }>
                    <ArrowForwardIos />
                </IconButton>
            ) }
            renderBottomCenterControls={ ({ slideCount, currentSlide, goToSlide }) => (
                <Box sx={ { display: 'flex', justifyContent: 'center', mt: 2 } }>
                    { Array.from({ length: slideCount }).map((_, index) => (
                        <IconButton
                            key={ index }
                            onClick={ () => goToSlide(index) }
                            sx={ {
                                color: currentSlide === index ? theme.palette.primary.main : theme.palette.text.secondary,
                            } }
                        >
                            <FiberManualRecord sx={ { fontSize: 12 } } />
                        </IconButton>
                    )) }
                </Box>
            ) }
        >
            { testimonials.map((testimonial, i) => (
                <motion.div
                    key={ i }
                    initial={ { opacity: 0, scale: 0.9 } }
                    animate={ { opacity: 1, scale: 1 } }
                    exit={ { opacity: 0, scale: 0.9 } }
                    transition={ { duration: 0.5 } }
                >
                    <Card
                        sx={ {
                            maxWidth: 800,
                            mx: 'auto',
                            my: 6,
                            p: { xs: 3, sm: 5 }, // responsive padding
                            textAlign: 'center',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                            borderRadius: 4,
                            background: 'rgba(255,255,255,0.9)', // light glass effect
                            backdropFilter: 'blur(6px)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-6px)',
                                boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
                            },
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
                                color: theme.palette.text.secondary,
                                lineHeight: 1.6,
                                px: { xs: 1, sm: 4 }, // extra padding for readability
                            } }
                        >
                            "{ testimonial.review }"
                        </Typography>
                        <Typography
                            variant="h6"
                            color="primary"
                            sx={ {
                                fontFamily: 'Cormorant Garamond',
                                fontWeight: 600,
                                letterSpacing: 0.5,
                            } }
                        >
                            - { testimonial.name }
                        </Typography>
                    </Card>
                </motion.div>
            )) }
        </Carousel>
    );
};

export default TestimonialCarousel;
