import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import { WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
    const whatsappNumber = "9130008625"; // Replace with your WhatsApp number without '+' or '00'
    const message = "Hello Chaitali Parlour, I'd like to book an appointment.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    const theme = useTheme();

    return (
        <motion.div
            initial={ { scale: 0 } }
            animate={ { scale: 1 } }
            transition={ { type: "spring", stiffness: 260, damping: 20 } }
            style={ {
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 1000,
            } }
        >
            <IconButton
                color="secondary"
                aria-label="WhatsApp Chat"
                sx={ {
                    backgroundColor: '#25D366',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#1EBE53',
                    },
                    p: 2,
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
                } }
                href={ url }
                target="_blank"
            >
                <WhatsAppIcon fontSize="large" />
            </IconButton>
        </motion.div>
    );
};

export default FloatingWhatsApp;
