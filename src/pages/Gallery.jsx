import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    useTheme,
    Chip,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import ImageWithFallback from '../components/common/ImageWithFallback';
import GalleryCard from '../components/gallery/GalleryCard';

// Import gallery images
import facialBleach from '../assets/gallery/facial-bleach.png';
import hairColour from '../assets/gallery/hair-colour.png';
import hairSpa from '../assets/gallery/hair-spa.png';
import manicure from '../assets/gallery/manicure.png';
import pedicure from '../assets/gallery/pedicure.png';
import threading from '../assets/gallery/threadin.png'; // Correcting the typo in usage
import waxing from '../assets/gallery/waxing.png';

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const theme = useTheme();

    const galleryImages = [
        { id: 1, src: facialBleach, alt: 'Facial & Bleach', tags: ['Skin Care', 'Facial'] },
        { id: 2, src: hairColour, alt: 'Hair Colouring', tags: ['Hair Care', 'Colouring'] },
        { id: 3, src: hairSpa, alt: 'Hair Spa', tags: ['Hair Care', 'Treatment'] },
        { id: 4, src: manicure, alt: 'Manicure', tags: ['Hand & Foot Care', 'Nails'] },
        { id: 5, src: pedicure, alt: 'Pedicure', tags: ['Hand & Foot Care', 'Feet'] },
        { id: 6, src: threading, alt: 'Threading', tags: ['Grooming', 'Eyebrows'] },
        { id: 7, src: waxing, alt: 'Waxing', tags: ['Grooming', 'Hair Removal'] },
        // Add more images here if needed, e.g., a bridal one if available
        { id: 8, src: 'https://placehold.co/800x600/DAA520/FFFFFF?text=Bridal+Look', alt: 'Bridal Makeup', tags: [ 'Makeup', 'Bridal' ] },
    ];

    const openLightbox = (image) => {
        setSelectedImage(image);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <SEOHead
                title="Gallery | Chaitali Beauty Parlour Pune"
                description="Browse our stunning gallery of beauty transformations at Chaitali Beauty Parlour, the best ladies parlour in Pune for makeup, hair, and skin care."
                keywords="beauty parlour gallery, before after makeup, hair transformations, facial results, nail art, bridal looks, chaitali beauty parlour"
                canonical="https://chaitali-parlour.netlify.app/gallery"
            />
            <Box sx={{ pt: 12, pb: 8, bgcolor: theme.palette.background.default }}>
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Typography variant="h2" align="center" gutterBottom sx={{ color: theme.palette.text.primary, mb: 2 }}>
                            Our Transformations
                        </Typography>
                        <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
                            Witness the magic we create! A showcase of looks from our happy clients.
                        </Typography>
                    </motion.div>

                    <Grid container spacing={3}>
                        {galleryImages.map((image) => (
                            <Grid item xs={12} sm={6} md={4} key={image.id}>
                                <GalleryCard image={image} onClick={openLightbox} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                <Dialog
                    open={lightboxOpen}
                    onClose={closeLightbox}
                    maxWidth="md"
                    fullWidth
                    aria-labelledby="lightbox-dialog-title"
                >
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <DialogTitle id="lightbox-dialog-title">
                                {selectedImage.alt}
                                <IconButton
                                    aria-label="close"
                                    onClick={closeLightbox}
                                    sx={{
                                        position: 'absolute',
                                        right: 8,
                                        top: 8,
                                        color: (theme) => theme.palette.grey[500],
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </DialogTitle>
                            <DialogContent dividers sx={{ p: 0 }}>
                                <ImageWithFallback src={selectedImage.src} alt={selectedImage.alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="body1">{selectedImage.alt}</Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                                        {selectedImage.tags.map((tag, tagIndex) => (
                                            <Chip key={tagIndex} label={tag} size="small" color="primary" variant="outlined" />
                                        ))}
                                    </Box>
                                </Box>
                            </DialogContent>
                        </motion.div>
                    )}
                </Dialog>
            </Box>
        </motion.div>
    );
};

export default Gallery;