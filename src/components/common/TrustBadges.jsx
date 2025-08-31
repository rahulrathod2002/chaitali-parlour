import React from 'react';
import { Container, Typography, Grid, useTheme } from '@mui/material';
import {
    Wc as WcIcon,
    CleanHands as CleanHandsIcon,
    LocalFlorist as LocalFloristIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const TrustBadges = () => {
    const theme = useTheme();
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="center" textAlign="center">
                <Grid item xs={12} sm={4}>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <WcIcon color="primary" sx={{ fontSize: 60, mb: 1 }} />
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Cormorant Garamond' }}>Women-led</Typography>
                        <Typography variant="body2" color="inherit">
                            Proudly owned and operated by women, for women.
                        </Typography>
                    </motion.div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <CleanHandsIcon color="primary" sx={{ fontSize: 60, mb: 1 }} />
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Cormorant Garamond' }}>Hygienic Standards</Typography>
                        <Typography variant="body2" color="inherit">
                            Maintaining the highest standards of cleanliness and sanitation.
                        </Typography>
                    </motion.div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <LocalFloristIcon color="primary" sx={{ fontSize: 60, mb: 1 }} />
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Cormorant Garamond' }}>Premium Products</Typography>
                        <Typography variant="body2" color="inherit">
                            Using only the finest natural and professional-grade beauty products.
                        </Typography>
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TrustBadges;