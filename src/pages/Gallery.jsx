import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    useTheme,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import ImageWithFallback from '../components/common/ImageWithFallback';
import GalleryCard from '../components/gallery/GalleryCard'; // Using the extracted component

const Gallery = () => {
    const [ lightboxOpen, setLightboxOpen ] = useState(false);
    const [ selectedImage, setSelectedImage ] = useState(null);
    const theme = useTheme();

    const galleryImages = [
        { id: 1, src: 'https://placehold.co/800x600/FFC0CB/FFFFFF?text=Before+After+1', alt: 'Before and After Makeup 1', tags: [ 'Makeup', 'Bridal' ] },
        { id: 2, src: 'https://placehold.co/800x600/DAA520/FFFFFF?text=Hair+Style+2', alt: 'Hair Styling 2', tags: [ 'Hair Care' ] },
        { id: 3, src: 'https://placehold.co/800x600/FDF5E6/333333?text=Facial+Result+3', alt: 'Facial Result 3', tags: [ 'Facials', 'Skin Treatment' ] },
        { id: 4, src: 'https://placehold.co/800x600/FFC0CB/FFFFFF?text=Nails+4', alt: 'Manicure Design 4', tags: [ 'Grooming' ] },
        { id: 5, src: 'https://placehold.co/800x600/DAA520/FFFFFF?text=Bridal+Look+5', alt: 'Bridal Look 5', tags: [ 'Makeup', 'Bridal' ] },
        { id: 6, src: 'https://placehold.co/800x600/FDF5E6/333333?text=Hair+Color+6', alt: 'Hair Color Transformation 6', tags: [ 'Hair Care' ] },
        { id: 7, src: 'https://placehold.co/800x600/FFC0CB/FFFFFF?text=Skin+Treatment+7', alt: 'Skin Treatment Glow 7', tags: [ 'Facials', 'Skin Treatment' ] },
        { id: 8, src: 'https://placehold.co/800x600/DAA520/FFFFFF?text=Pedicure+8', alt: 'Pedicure Spa 8', tags: [ 'Grooming' ] },
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
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 0.5 } }
        >
            <SEOHead
                title="Gallery | Chaitali Parlour - Before & After Transformations"
                description="Browse our stunning gallery of beauty transformations: before and after makeup, hair styling, facials, and grooming services."
                keywords="beauty parlour gallery, before after makeup, hair transformations, facial results, nail art, bridal looks"
                canonical="https://www.chaitaliparlour.com/gallery"
            />
            <Box sx={ { pt: 12, pb: 8, bgcolor: theme.palette.background.default } }>
                <Container maxWidth="lg">
                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        animate={ { y: 0, opacity: 1 } }
                        transition={ { duration: 0.7 } }
                    >
                        <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.text.primary, mb: 2 } }>
                            Our Transformations
                        </Typography>
                        <Typography variant="body1" align="center" color="text.secondary" paragraph sx={ { mb: 6 } }>
                            Witness the magic we create! Before and after looks from our happy clients.
                        </Typography>
                    </motion.div>

                    <Grid container spacing={ 3 }>
                        { galleryImages.map((image, index) => (
                            <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ image.id }>
                                <GalleryCard image={ image } onClick={ openLightbox } />
                            </Grid>
                        )) }
                    </Grid>
                </Container>

                <Dialog
                    open={ lightboxOpen }
                    onClose={ closeLightbox }
                    maxWidth="md"
                    fullWidth
                    aria-labelledby="lightbox-dialog-title"
                >
                    { selectedImage && (
                        <motion.div
                            initial={ { opacity: 0, scale: 0.9 } }
                            animate={ { opacity: 1, scale: 1 } }
                            exit={ { opacity: 0, scale: 0.9 } }
                            transition={ { duration: 0.3 } }
                        >
                            <DialogTitle id="lightbox-dialog-title">
                                { selectedImage.alt }
                                <IconButton
                                    aria-label="close"
                                    onClick={ closeLightbox }
                                    sx={ {
                                        position: 'absolute',
                                        right: 8,
                                        top: 8,
                                        color: (theme) => theme.palette.grey[ 500 ],
                                    } }
                                >
                                    <CloseIcon />
                                </IconButton>
                            </DialogTitle>
                            <DialogContent dividers sx={ { p: 0 } }>
                                <ImageWithFallback src={ selectedImage.src } alt={ selectedImage.alt } style={ { width: '100%', height: 'auto', display: 'block' } } />
                                <Box sx={ { p: 2 } }>
                                    <Typography variant="body1">{ selectedImage.alt }</Typography>
                                    <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 } }>
                                        { selectedImage.tags.map((tag, tagIndex) => (
                                            <Chip key={ tagIndex } label={ tag } size="small" color="primary" variant="outlined" />
                                        )) }
                                    </Box>
                                </Box>
                            </DialogContent>
                        </motion.div>
                    ) }
                </Dialog>
            </Box>
        </motion.div>
    );
};

export default Gallery;
