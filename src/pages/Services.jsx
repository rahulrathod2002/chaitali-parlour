import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
    TextField,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import ServiceCard from '../components/services/ServiceCard';
import { servicesData } from '../data/services'; // Ensure this is imported

const Services = () => {
    const [ filter, setFilter ] = useState('All');
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ debouncedSearchTerm, setDebouncedSearchTerm ] = useState('');
    const theme = useTheme();

    // Debounce search term
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500); // 500ms delay
        return () => {
            clearTimeout(handler);
        };
    }, [ searchTerm ]);

    const categories = [ 'All', ...new Set(servicesData.map(service => service.category)) ];

    const filteredServices = servicesData.filter(service => {
        const matchesCategory = filter === 'All' || service.category === filter;
        const matchesSearch = service.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 0.5 } }
        >
            <SEOHead
                title="Our Services | Chaitali Parlour - Facials, Hair Care, Bridal & More"
                description="Explore our wide range of beauty and grooming services including luxury facials, hair care, bridal makeup packages, and more. Find your perfect treatment."
                keywords="beauty services, facials, hair spa, bridal makeup, manicure, pedicure, waxing, skin treatments, beauty parlour services pune"
                canonical="https://www.chaitaliparlour.com/services"
                structuredData={ {
                    "@type": "Service",
                    "serviceType": "Beauty & Personal Care",
                    "name": "Chaitali Parlour Services",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Beauty Services Catalog",
                        "itemListElement": servicesData.map(service => service.seo.structuredData)
                    }
                } }
            />
            <Box sx={ { pt: 12, pb: 8, bgcolor: theme.palette.background.default } }>
                <Container maxWidth="lg">
                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        animate={ { y: 0, opacity: 1 } }
                        transition={ { duration: 0.7 } }
                    >
                        <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.text.primary, mb: 2 } }>
                            Our Full Range of Services
                        </Typography>
                        <Typography variant="body1" align="center" color="text.secondary" paragraph sx={ { mb: 4 } }>
                            Discover the perfect treatment for your beauty and wellness needs.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        whileInView={ { y: 0, opacity: 1 } }
                        viewport={ { once: true, amount: 0.2 } }
                        transition={ { duration: 0.7 } }
                    >
                        <Box sx={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mb: 4 } }>
                            { categories.map((cat, index) => (
                                <Button
                                    key={ index }
                                    variant={ filter === cat ? 'contained' : 'outlined' }
                                    color="primary"
                                    onClick={ () => setFilter(cat) }
                                    sx={ { borderRadius: 50 } }
                                >
                                    { cat }
                                </Button>
                            )) }
                        </Box>
                    </motion.div>

                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        whileInView={ { y: 0, opacity: 1 } }
                        viewport={ { once: true, amount: 0.2 } }
                        transition={ { duration: 0.7, delay: 0.1 } }
                    >
                        <TextField
                            fullWidth
                            label="Search Services"
                            variant="outlined"
                            value={ searchTerm }
                            onChange={ (e) => setSearchTerm(e.target.value) }
                            sx={ { mb: 6, maxWidth: 600, mx: 'auto', display: 'flex' } }
                        />
                    </motion.div>

                    <Grid container spacing={ 4 } justifyContent="center">
                        { filteredServices.length > 0 ? (
                            filteredServices.map((service, index) => (
                                <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ service.id }>
                                    <ServiceCard service={ service } />
                                </Grid>
                            ))
                        ) : (
                            <Grid item xs={ 12 }>
                                <Typography variant="h6" align="center" color="text.secondary">
                                    No services found matching your criteria.
                                </Typography>
                            </Grid>
                        ) }
                    </Grid>
                </Container>
            </Box>
        </motion.div>
    );
};

export default Services;
