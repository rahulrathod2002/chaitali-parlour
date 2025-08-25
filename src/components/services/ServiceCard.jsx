import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    Chip,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext'; // Import context
import CardMediaWithFallback from '../common/CardMediaWithFallback';

const ServiceCard = ({ service }) => {
    const theme = useTheme();
    const { showSnackbar } = useAppContext();

    const handleBookNow = () => {
        // In a real app, this would navigate to the booking page with service pre-selected
        showSnackbar(`Booking for ${service.name} is not implemented yet.`, 'info');
    };

    return (
        <motion.div
            initial={ { y: 50, opacity: 0 } }
            whileInView={ { y: 0, opacity: 1 } }
            viewport={ { once: true, amount: 0.3 } }
            transition={ { duration: 0.5 } }
            style={ {
                flex: '1 1 calc(33% - 32px)', // For responsive grid
                minWidth: '280px',
                maxWidth: '380px',
            } }
        >
            <Card
                sx={ {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: theme.shadows[ 1 ],
                } }
            >
                <CardMediaWithFallback
                    component="img"
                    height="200"
                    src={ service.image }
                    alt={ service.name }
                    sx={ { objectFit: 'cover' } }
                />
                <CardContent sx={ { flexGrow: 1 } }>
                    <Typography gutterBottom variant="h5" component="div" sx={ { fontFamily: 'Cormorant Garamond' } }>
                        { service.name }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        { service.description }
                    </Typography>
                    <Typography variant="body1" color="primary" sx={ { mt: 1, fontWeight: 'bold' } }>
                        { service.price }
                    </Typography>
                    <Box sx={ { mt: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 } }>
                        { service.tags && service.tags.map((tag, index) => (
                            <Chip key={ index } label={ tag } size="small" color="primary" variant="outlined" />
                        )) }
                    </Box>
                </CardContent>
                <Box sx={ { p: 2, pt: 0 } }>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={ handleBookNow }
                        component={ RouterLink }
                        to="/book" // Link to book appointment page
                        state={ { selectedService: service.name } } // Pass service name for pre-selection
                    >
                        Book Now
                    </Button>
                </Box>
            </Card>
        </motion.div>
    );
};

export default ServiceCard;
