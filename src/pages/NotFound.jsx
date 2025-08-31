import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';

const NotFound = () => {
    const theme = useTheme();
    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 0.5 } }
        >
            <SEOHead
                title="404 Not Found | Chaitali Parlour"
                description="The page you are looking for does not exist."
                keywords="404, page not found, error"
                canonical="https://chaitali-parlour.netlify.app/404"
            />
            <Box
                sx={ {
                    minHeight: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    pt: 10,
                    pb: 5,
                    bgcolor: theme.palette.background.default,
                } }
            >
                <motion.div
                    initial={ { scale: 0.8, opacity: 0 } }
                    animate={ { scale: 1, opacity: 1 } }
                    transition={ { duration: 0.5 } }
                >
                    <Typography variant="h1" color="primary" sx={ { mb: 2 } }>
                        404
                    </Typography>
                </motion.div>
                <motion.div
                    initial={ { y: 20, opacity: 0 } }
                    animate={ { y: 0, opacity: 1 } }
                    transition={ { delay: 0.3, duration: 0.5 } }
                >
                    <Typography variant="h4" gutterBottom sx={ { fontFamily: 'Cormorant Garamond', mb: 2 } }>
                        Page Not Found
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={ { mb: 4 } }>
                        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </Typography>
                    <Box sx={ { display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' } }>
                        <Button variant="contained" color="primary" component={ RouterLink } to="/" size="large">
                            Go to Home
                        </Button>
                        <Button variant="outlined" color="primary" component={ RouterLink } to="/services" size="large">
                            Explore Services
                        </Button>
                    </Box>
                </motion.div>
            </Box>
        </motion.div>
    );
};

export default NotFound;
