import React from 'react';
import { Card, Box, Typography, Chip, useTheme } from '@mui/material';
import CardMediaWithFallback from '../common/CardMediaWithFallback';
import { motion } from 'framer-motion';

const GalleryCard = ({ image, onClick }) => {
    const theme = useTheme();
    return (
        <motion.div
            initial={ { scale: 0.8, opacity: 0 } }
            whileInView={ { scale: 1, opacity: 1 } }
            viewport={ { once: true, amount: 0.3 } }
            transition={ { duration: 0.5 } }
            whileHover={ { scale: 1.03, rotate: 1 } }
            whileTap={ { scale: 0.98 } }
        >
            <Card
                onClick={ () => onClick(image) }
                sx={ {
                    cursor: 'pointer',
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: theme.shadows[ 1 ],
                } }
            >
                <CardMediaWithFallback
                    component="img"
                    height="300"
                    src={ image.src }
                    alt={ image.alt }
                    sx={ { objectFit: 'cover' } }
                />
                <Box
                    sx={ {
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        bgcolor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        p: 1.5,
                        transform: 'translateY(100%)',
                        transition: 'transform 0.3s ease-in-out',
                        '.MuiCard-root:hover &': {
                            transform: 'translateY(0)',
                        },
                    } }
                >
                    <Typography variant="body2">{ image.alt }</Typography>
                    <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 } }>
                        { image.tags.map((tag, tagIndex) => (
                            <Chip key={ tagIndex } label={ tag } size="small" sx={ { bgcolor: theme.palette.primary.light, color: theme.palette.text.primary } } />
                        )) }
                    </Box>
                </Box>
            </Card>
        </motion.div>
    );
};

export default GalleryCard;
