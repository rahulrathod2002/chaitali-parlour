import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    Rating,
    Typography,
    useTheme,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import { motion } from 'framer-motion';
import { googleReviewsUrl } from '../../data/testimonials';

const TestimonialCarousel = ({ testimonials }) => {
    const theme = useTheme();

    return (
        <Box>
            <Box
                sx={ {
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, minmax(0, 1fr))',
                        lg: 'repeat(3, minmax(0, 1fr))',
                    },
                    gap: 3,
                    alignItems: 'stretch',
                } }
            >
                { testimonials.map((testimonial, index) => (
                    <Box key={ testimonial.name } sx={ { minWidth: 0 } }>
                        <motion.div
                            initial={ { opacity: 0, y: 24 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            viewport={ { once: true, amount: 0.2 } }
                            transition={ { duration: 0.45, delay: index * 0.1 } }
                            style={ { height: '100%' } }
                        >
                            <Card
                                sx={ {
                                    p: { xs: 3, md: 3.5 },
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    gap: 2,
                                    boxShadow: theme.shadows[ 3 ],
                                } }
                            >
                                <Box sx={ { display: 'flex', alignItems: 'center', gap: 1.5 } }>
                                    <Avatar
                                        src={ testimonial.avatar }
                                        alt={ testimonial.name }
                                        sx={ {
                                            width: 56,
                                            height: 56,
                                            border: `2px solid ${theme.palette.primary.light}`,
                                            fontWeight: 700,
                                            bgcolor: theme.palette.primary.soft,
                                            color: theme.palette.primary.main,
                                        } }
                                    >
                                        { testimonial.initials }
                                    </Avatar>
                                    <Box sx={ { minWidth: 0 } }>
                                        <Typography variant="h6" sx={ { fontFamily: 'Cormorant Garamond', lineHeight: 1.1 } }>
                                            { testimonial.name }
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box>
                                    <Rating
                                        name={ `testimonial-rating-${index}` }
                                        value={ testimonial.rating }
                                        readOnly
                                        size="small"
                                        emptyIcon={ <StarIcon style={ { opacity: 0.35 } } fontSize="inherit" /> }
                                        sx={ { mb: 1.5 } }
                                    />
                                    <Typography variant="body1" sx={ { color: theme.palette.text.primary, lineHeight: 1.85, minHeight: 220 } }>
                                        { testimonial.review }
                                    </Typography>
                                </Box>
                            </Card>
                        </motion.div>
                    </Box>
                )) }
            </Box>

            <Box sx={ { mt: 5, textAlign: 'center' } }>
                <Button
                    variant="outlined"
                    color="primary"
                    href={ googleReviewsUrl }
                    target="_blank"
                    rel="noreferrer"
                    endIcon={ <TravelExploreRoundedIcon /> }
                >
                    View More Reviews
                </Button>
            </Box>
        </Box>
    );
};

export default TestimonialCarousel;
