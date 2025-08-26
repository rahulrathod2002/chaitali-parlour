import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    CircularProgress,
    Card,
    useTheme,
    InputAdornment,
} from '@mui/material';
import {
    LocationOn as LocationOnIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    AccessTime as AccessTimeIcon,
    Directions as DirectionsIcon,
    PersonOutline as PersonOutlineIcon,
    MessageOutlined as MessageOutlinedIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { useAppContext } from '../context/AppContext'; // Import context

const ContactUs = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [ loading, setLoading ] = useState(false);
    const { showSnackbar, showDialog, hideDialog } = useAppContext();
    const theme = useTheme();

    const handleChange = (e) => {
        setFormData({ ...formData, [ e.target.name ]: e.target.value });
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
        // Simulate API call for sending email
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
            console.log('Contact form submitted:', formData);
            showDialog(
                'Message Sent!',
                `Thank you, ${formData.name}! We have received your message and will get back to you shortly.`,
                <Button onClick={ hideDialog } color="primary" autoFocus>
                    OK
                </Button>
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

    const mapEmbedUrl = `https://maps.google.com/maps?q=Skylish%20Avenue%2C%20Jambe%20Rd%2C%20Tajane%20Wasti%2C%20Punawale%2C%20Pune%2C%20Maharashtra%20411033&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
    };

    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 0.5 } }
        >
            <SEOHead
                title="Contact Us | Chaitali Parlour - Get in Touch"
                description="Contact Chaitali Parlour for appointments, inquiries, or feedback. Find our address, phone number, email, and location on Google Maps."
                keywords="contact beauty parlour, salon contact, parlour phone number, parlour email, google maps, pune beauty salon"
                canonical="https://www.chaitaliparlour.com/contact"
                structuredData={ {
                    "@type": "ContactPage",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Chaitali Parlour",
                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "telephone": "+91-9130008625",
                                "contactType": "customer service"
                            },
                            {
                                "@type": "ContactPoint",
                                "email": "chaitali.parlour.pune@gmail.com",
                                "contactType": "customer service"
                            }
                        ]
                    }
                } }
            />
            <Box sx={ { pt: 12, pb: 8, background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.primary.light} 100%)` } }>
                <Container maxWidth="lg">
                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        animate={ { y: 0, opacity: 1 } }
                        transition={ { duration: 0.7 } }
                    >
                        <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.primary.contrastText, mb: 2, textShadow: '1px 1px 3px rgba(0,0,0,0.2)' } }>
                            Get in Touch
                        </Typography>
                        <Typography variant="body1" align="center" color="primary.contrastText" paragraph sx={ { mb: 6 } }>
                            We'd love to hear from you! Reach out for appointments, inquiries, or feedback.
                        </Typography>
                    </motion.div>

                    <Grid container spacing={ 4 }>
                        <Grid item xs={ 12 } md={ 6 }>
                            <motion.div
                                initial={ { x: -50, opacity: 0 } }
                                whileInView={ { x: 0, opacity: 1 } }
                                viewport={ { once: true, amount: 0.3 } }
                                transition={ { duration: 0.7, delay: 0.2 } }
                            >
                                <Card sx={ {
                                    p: 4,
                                    borderRadius: 4,
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    boxShadow: theme.shadows[ 10 ],
                                } }>
                                    <Typography variant="h4" gutterBottom sx={ { fontFamily: 'Cormorant Garamond' } }>
                                        Send us a Message
                                    </Typography>
                                    <form onSubmit={ handleSubmit }>
                                        <Grid container spacing={ 3 }>
                                            <Grid item xs={ 12 }>
                                                <motion.div variants={ formVariants } initial="hidden" animate="visible" custom={ 0 }>
                                                    <TextField
                                                        fullWidth
                                                        label="Your Name"
                                                        name="name"
                                                        value={ formData.name }
                                                        onChange={ handleChange }
                                                        required
                                                        variant="filled"
                                                        InputProps={ {
                                                            startAdornment: <InputAdornment position="start"><PersonOutlineIcon /></InputAdornment>,
                                                        } }
                                                    />
                                                </motion.div>
                                            </Grid>
                                            <Grid item xs={ 12 }>
                                                <motion.div variants={ formVariants } initial="hidden" animate="visible" custom={ 1 }>
                                                    <TextField
                                                        fullWidth
                                                        label="Your Email"
                                                        name="email"
                                                        value={ formData.email }
                                                        onChange={ handleChange }
                                                        required
                                                        type="email"
                                                        variant="filled"
                                                        InputProps={ {
                                                            startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                                                        } }
                                                    />
                                                </motion.div>
                                            </Grid>
                                            <Grid item xs={ 12 }>
                                                <motion.div variants={ formVariants } initial="hidden" animate="visible" custom={ 2 }>
                                                    <TextField
                                                        fullWidth
                                                        label="Your Message"
                                                        name="message"
                                                        value={ formData.message }
                                                        onChange={ handleChange }
                                                        required
                                                        multiline
                                                        rows={ 6 }
                                                        variant="filled"
                                                        InputProps={ {
                                                            startAdornment: <InputAdornment position="start"><MessageOutlinedIcon /></InputAdornment>,
                                                        } }
                                                    />
                                                </motion.div>
                                            </Grid>
                                            <Grid item xs={ 12 }>
                                                <motion.div variants={ formVariants } initial="hidden" animate="visible" custom={ 3 } whileHover={ { scale: 1.02 } } whileTap={ { scale: 0.98 } }>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        fullWidth
                                                        size="large"
                                                        disabled={ loading }
                                                        startIcon={ loading ? <CircularProgress size={ 20 } color="inherit" /> : <EmailIcon /> }
                                                        sx={ { py: 1.5 } }
                                                    >
                                                        { loading ? 'Sending...' : 'Send Message' }
                                                    </Button>
                                                </motion.div>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Card>
                            </motion.div>
                        </Grid>
                        <Grid item xs={ 12 } md={ 6 }>
                            <motion.div
                                initial={ { x: 50, opacity: 0 } }
                                whileInView={ { x: 0, opacity: 1 } }
                                viewport={ { once: true, amount: 0.3 } }
                                transition={ { duration: 0.7, delay: 0.4 } }
                            >
                                <Card sx={ { p: 4, boxShadow: theme.shadows[ 2 ], borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column' } }>
                                    <Typography variant="h4" gutterBottom sx={ { fontFamily: 'Cormorant Garamond' } }>
                                        Visit Us
                                    </Typography>
                                    <Typography variant="body1" sx={ { display: 'flex', alignItems: 'center', mb: 2 } }>
                                        <LocationOnIcon color="primary" sx={ { mr: 1 } } /> Skylish Avenue, Jambe Rd, Tajane Wasti, Punawale, Pune, Maharashtra 411033
                                    </Typography>
                                    <Typography variant="body1" sx={ { display: 'flex', alignItems: 'center', mb: 2 } }>
                                        <PhoneIcon color="primary" sx={ { mr: 1 } } /> +91-9130008625
                                    </Typography>
                                    <Typography variant="body1" sx={ { display: 'flex', alignItems: 'center', mb: 2 } }>
                                        <EmailIcon color="primary" sx={ { mr: 1 } } />chaitali.parlour.pune@gmail.com
                                    </Typography>
                                    <Typography variant="body1" sx={ { display: 'flex', alignItems: 'center', mb: 3 } }>
                                        <AccessTimeIcon color="primary" sx={ { mr: 1 } } /> Mon-Sun: 10:00 AM - 8:00 PM
                                    </Typography>
                                    <Box sx={ { flexGrow: 1, minHeight: { xs: 200, sm: 300 } } }>
                                        <iframe
                                            src={ mapEmbedUrl }
                                            width="100%"
                                            height="100%"
                                            style={ { border: 0, borderRadius: theme.shape.borderRadius } }
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Chaitali Parlour Location"
                                        ></iframe>
                                    </Box>
                                    <Box sx={ { mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' } }>
                                        <Button variant="contained" color="secondary" href="https://www.google.com/maps/dir/?api=1&destination=Skylish+Avenue,+Jambe+Rd,+Tajane+Wasti,+Punawale,+Pune,+Maharashtra+411033" target="_blank" startIcon={ <DirectionsIcon /> }>
                                            Get Directions
                                        </Button>
                                        <Button variant="outlined" color="primary" href="tel:+919130008625" startIcon={ <PhoneIcon /> }>
                                            Call Now
                                        </Button>
                                    </Box>
                                </Card>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </motion.div>
    );
};

export default ContactUs;
