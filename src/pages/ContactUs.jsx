import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CircularProgress,
    Container,
    Grid,
    InputAdornment,
    Stack,
    TextField,
    Typography,
    useTheme,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsIcon from '@mui/icons-material/Directions';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { useAppContext } from '../context/AppContext';

const contactDetails = [
    {
        icon: <LocationOnIcon color="primary" />,
        label: 'Address',
        value: 'Skylish Avenue society, A 502, Pradhikaran, Punawale, Pimpri-Chinchwad, Maharashtra 411033, Pune, India',
    },
    {
        icon: <PhoneIcon color="primary" />,
        label: 'Phone',
        value: '+91 9130008625',
    },
    {
        icon: <EmailIcon color="primary" />,
        label: 'Email',
        value: 'chaitali.parlour.pune@gmail.com',
    },
    {
        icon: <AccessTimeIcon color="primary" />,
        label: 'Hours',
        value: 'Monday - Sunday: 10:00 AM - 7:00 PM',
    },
];

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const { showSnackbar, showDialog, hideDialog } = useAppContext();
    const theme = useTheme();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { name, email, message } = formData;
        if (!name || !email || !message) {
            showSnackbar('Please fill in all required fields.', 'error');
            return false;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            showSnackbar('Please enter a valid email address.', 'error');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            showDialog(
                'Message Sent!',
                `Thank you, ${formData.name}! We have received your message and will get back to you shortly.`,
                <Button onClick={hideDialog} color="primary" autoFocus>
                    OK
                </Button>,
            );
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error('Contact form error:', error);
            showSnackbar('Failed to send message. Please try again.', 'error');
        } finally {
            setLoading(false);
        }
    };

    const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.212472747093!2d73.730321!3d18.6324026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb0054e62c2f%3A0xb5efa7b1df27a7e4!2sChaitali%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1693471234567!5m2!1sen!2sin';

    return (
        <motion.div initial={ { opacity: 0 } } animate={ { opacity: 1 } } transition={ { duration: 0.5 } }>
            <SEOHead
                title="Contact Us | Chaitali Parlour - Get in Touch"
                description="Contact Chaitali Parlour for appointments, inquiries, or feedback. Find our address, phone number, email, and location on Google Maps."
                keywords="contact beauty parlour, salon contact, parlour phone number, parlour email, google maps, pune beauty salon"
                canonical="https://chaitali-parlour.netlify.app/contact"
                structuredData={ {
                    '@context': 'http://schema.org',
                    '@type': 'BeautySalon',
                    name: 'Chaitali Beauty Parlour',
                    alternateName: 'Chaitali Parlour',
                    image: 'https://chaitali-parlour.netlify.app/parlour-banner.jpg',
                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: '1st Floor Dnyandeep Bungalow, Opposite Brick Castle, Behind Bhosale Garden, Savtanagari, Hadapsar',
                        addressLocality: 'Pune',
                        addressRegion: 'Maharashtra',
                        postalCode: '411028',
                        addressCountry: 'IN',
                    },
                    geo: {
                        '@type': 'GeoCoordinates',
                        latitude: 18.6324026,
                        longitude: 73.73251,
                    },
                    url: 'https://chaitali-parlour.netlify.app/',
                    telephone: '+919890818752',
                    openingHoursSpecification: [
                        {
                            '@type': 'OpeningHoursSpecification',
                            dayOfWeek: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
                            opens: '10:00',
                            closes: '21:00',
                        },
                    ],
                    hasMap: 'https://maps.app.goo.gl/vjFdhjkNNBPe7cSg9',
                } }
            />

            <Box
                sx={ {
                    pt: 13,
                    pb: { xs: 8, md: 10 },
                    background: `linear-gradient(180deg, ${theme.palette.surface.muted} 0%, ${theme.palette.background.default} 100%)`,
                } }
            >
                <Container maxWidth="lg">
                    <Box sx={ { textAlign: 'center', mb: 6 } }>
                        <Typography
                            variant="overline"
                            sx={ {
                                display: 'block',
                                color: theme.palette.primary.main,
                                fontWeight: 700,
                                letterSpacing: '0.18em',
                                mb: 1.5,
                            } }
                        >
                            Contact Us
                        </Typography>
                        <Typography variant="h2" gutterBottom sx={ { color: theme.palette.text.primary, mb: 2 } }>
                            Let’s Plan Your Next Visit
                        </Typography>
                        <Typography color="text.secondary" sx={ { maxWidth: 760, mx: 'auto', lineHeight: 1.8 } }>
                            Reach out for appointments, service questions, or location help. The form and visit card below are designed to make contacting Chaitali Beauty Parlour quick and clear.
                        </Typography>
                    </Box>

                    <Grid container spacing={ 4 } alignItems="stretch">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Card
                                sx={ {
                                    height: '100%',
                                    p: { xs: 3, md: 4 },
                                    boxShadow: theme.shadows[ 3 ],
                                    background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, rgba(255,255,255,0.95) 100%)`,
                                } }
                            >
                                <Typography variant="h4" sx={ { fontFamily: 'Cormorant Garamond', mb: 1.25 } }>
                                    Send Us A Message
                                </Typography>
                                <Typography color="text.secondary" sx={ { mb: 3.5, lineHeight: 1.75 } }>
                                    Share what service you’re interested in and we’ll get back to you with the right guidance.
                                </Typography>

                                <form onSubmit={ handleSubmit }>
                                    <Stack spacing={ 2.25 }>
                                        <TextField
                                            fullWidth
                                            label="Your Name"
                                            name="name"
                                            value={ formData.name }
                                            onChange={ handleChange }
                                            required
                                            variant="outlined"
                                            InputProps={ {
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PersonOutlineIcon />
                                                    </InputAdornment>
                                                ),
                                            } }
                                        />
                                        <TextField
                                            fullWidth
                                            label="Your Email"
                                            name="email"
                                            value={ formData.email }
                                            onChange={ handleChange }
                                            required
                                            type="email"
                                            variant="outlined"
                                            InputProps={ {
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <EmailIcon />
                                                    </InputAdornment>
                                                ),
                                            } }
                                        />
                                        <TextField
                                            fullWidth
                                            label="Your Message"
                                            name="message"
                                            value={ formData.message }
                                            onChange={ handleChange }
                                            required
                                            multiline
                                            rows={ 6 }
                                            variant="outlined"
                                            InputProps={ {
                                                startAdornment: (
                                                    <InputAdornment position="start" sx={ { alignSelf: 'flex-start', mt: 1.5 } }>
                                                        <MessageOutlinedIcon />
                                                    </InputAdornment>
                                                ),
                                            } }
                                        />
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            disabled={ loading }
                                            startIcon={ loading ? <CircularProgress size={ 20 } color="inherit" /> : <EmailIcon /> }
                                            sx={ { alignSelf: 'flex-start', px: 3.5, py: 1.35 } }
                                        >
                                            { loading ? 'Sending...' : 'Send Message' }
                                        </Button>
                                    </Stack>
                                </form>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Card
                                sx={ {
                                    height: '100%',
                                    p: { xs: 3, md: 4 },
                                    boxShadow: theme.shadows[ 3 ],
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 3,
                                } }
                            >
                                <Box>
                                    <Typography variant="h4" sx={ { fontFamily: 'Cormorant Garamond', mb: 1.25 } }>
                                        Visit Us
                                    </Typography>
                                    <Typography color="text.secondary" sx={ { lineHeight: 1.75 } }>
                                        Find the salon easily, check the timings, or contact us directly before your appointment.
                                    </Typography>
                                </Box>

                                <Grid container spacing={ 2 }>
                                    { contactDetails.map((item) => (
                                        <Grid size={{ xs: 12, sm: 6 }} key={ item.label }>
                                            <Box
                                                sx={ {
                                                    height: '100%',
                                                    p: 2,
                                                    border: `1px solid ${theme.palette.divider}`,
                                                    backgroundColor: theme.palette.surface.muted,
                                                } }
                                            >
                                                <Box sx={ { display: 'flex', alignItems: 'center', gap: 1, mb: 1 } }>
                                                    { item.icon }
                                                    <Typography variant="subtitle2" sx={ { fontWeight: 700 } }>
                                                        { item.label }
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body2" color="text.secondary" sx={ { lineHeight: 1.7 } }>
                                                    { item.value }
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    )) }
                                </Grid>

                                <Box sx={ { minHeight: { xs: 240, md: 300 }, overflow: 'hidden', border: `1px solid ${theme.palette.divider}` } }>
                                    <iframe
                                        src={ mapEmbedUrl }
                                        width="100%"
                                        height="100%"
                                        style={ { border: 0, display: 'block' } }
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Chaitali Parlour Location"
                                    />
                                </Box>

                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={ 2 }>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href="https://maps.app.goo.gl/vjFdhjkNNBPe7cSg9"
                                        target="_blank"
                                        rel="noreferrer"
                                        startIcon={ <DirectionsIcon /> }
                                        sx={ { flex: 1 } }
                                    >
                                        Get Directions
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        href="tel:+919890818752"
                                        startIcon={ <PhoneIcon /> }
                                        sx={ { flex: 1 } }
                                    >
                                        Call Now
                                    </Button>
                                </Stack>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </motion.div>
    );
};

export default ContactUs;
