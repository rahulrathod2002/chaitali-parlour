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
            slidesToShow={1}
            wrapAround
            renderCenterLeftControls={({ previousSlide }) => (
                <IconButton onClick={previousSlide} sx={{ color: theme.palette.primary.main }}>
                    <ArrowBackIosNew />
                </IconButton>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <IconButton onClick={nextSlide} sx={{ color: theme.palette.primary.main }}>
                    <ArrowForwardIos />
                </IconButton>
            )}
            renderBottomCenterControls={({ slideCount, currentSlide, goToSlide }) => (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    {Array.from({ length: slideCount }).map((_, index) => (
                        <IconButton
                            key={index}
                            onClick={() => goToSlide(index)}
                            sx={{
                                color: currentSlide === index ? theme.palette.primary.main : theme.palette.text.secondary,
                            }}
                        >
                            <FiberManualRecord sx={{ fontSize: 12 }} />
                        </IconButton>
                    ))}
                </Box>
            )}
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
                            maxWidth: 700,
                            mx: 'auto',
                            my: 4,
                            p: 4,
                            textAlign: 'center',
                            boxShadow: theme.shadows[ 2 ],
                            borderRadius: 3,
                            bgcolor: theme.palette.background.default,
                        } }
                    >
                        <Avatar src={ testimonial.avatar } alt={ testimonial.name } sx={ { width: 80, height: 80, mx: 'auto', mb: 2 } } />
                        <Rating name="read-only" value={ testimonial.rating } readOnly emptyIcon={ <StarIcon style={ { opacity: 0.55 } } fontSize="inherit" /> } />
                        <Typography variant="body1" sx={ { fontStyle: 'italic', my: 2 } }>
                            "{ testimonial.review }"
                        </Typography>
                        <Typography variant="h6" color="primary" sx={ { fontFamily: 'Cormorant Garamond' } }>
                            - { testimonial.name }
                        </Typography>
                    </Card>
                </motion.div>
            )) }
        </Carousel>
    );
};

export default TestimonialCarousel;
