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
import { Star as StarIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Carousel from 'react-material-ui-carousel'; // Ensure this library is installed

const TestimonialCarousel = ({ testimonials }) => {
    const theme = useTheme();
    return (
        <Carousel
            animation="slide"
            navButtonsAlwaysVisible
            indicatorContainerProps={ {
                style: {
                    marginTop: theme.spacing(3),
                },
            } }
            activeIndicatorIconButtonProps={ {
                style: {
                    color: theme.palette.primary.main, // Active dot color
                },
            } }
            indicatorIconButtonProps={ {
                style: {
                    color: theme.palette.text.secondary, // Inactive dot color
                },
            } }
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
