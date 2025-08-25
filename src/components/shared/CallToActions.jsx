import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Box, useTheme } from '@mui/material';
import {
    EventAvailable as EventAvailableIcon,
    Phone as PhoneIcon,
    WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const CallToActions = ({ justifyContent = 'center', sx = {} }) => {
    const whatsappNumber = "919130008625"; // Replace with your WhatsApp number
    const callNumber = "+919130008625"; // Replace with your phone number
    const theme = useTheme();

    return (
        <Box sx={ { display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent, ...sx } }>
            <motion.div whileHover={ { scale: 1.05 } } whileTap={ { scale: 0.95 } }>
                <Button variant="contained" color="primary" component={ RouterLink } to="/book" startIcon={ <EventAvailableIcon /> }>
                    Book Appointment
                </Button>
            </motion.div>
            <motion.div whileHover={ { scale: 1.05 } } whileTap={ { scale: 0.95 } }>
                <Button variant="outlined" color="primary" href={ `tel:${callNumber}` } startIcon={ <PhoneIcon /> }>
                    Call Now
                </Button>
            </motion.div>
            <motion.div whileHover={ { scale: 1.05 } } whileTap={ { scale: 0.95 } }>
                <Button
                    variant="outlined"
                    color="success"
                    href={ `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I'd like to inquire about your services.")}` }
                    target="_blank"
                    startIcon={ <WhatsAppIcon /> }
                    sx={ {
                        borderColor: '#25D366',
                        color: '#25D366',
                        '&:hover': {
                            backgroundColor: 'rgba(37, 211, 102, 0.1)',
                            borderColor: '#1EBE53',
                            color: '#1EBE53',
                        },
                    } }
                >
                    WhatsApp Chat
                </Button>
            </motion.div>
        </Box>
    );
};

export default CallToActions;
