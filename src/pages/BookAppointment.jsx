import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    MenuItem,
    Button,
    CircularProgress,
    Card,
    useTheme,
    InputAdornment,
} from '@mui/material';
import {
    EventAvailable as EventAvailableIcon,
    WhatsApp as WhatsAppIcon,
    PersonOutline as PersonOutlineIcon,
    PhoneOutlined as PhoneOutlinedIcon,
    EmailOutlined as EmailOutlinedIcon,
    BookOnlineOutlined as BookOnlineOutlinedIcon,
    NotesOutlined as NotesOutlinedIcon,
} from '@mui/icons-material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { servicesData } from '../data/services'; // Ensure this is imported
import { useAppContext } from '../context/AppContext'; // Import context
import { useLocation } from 'react-router-dom';

const BookAppointment = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: null,
        time: null,
        notes: '',
    });
    const [ loading, setLoading ] = useState(false);
    const { showSnackbar, showDialog, hideDialog } = useAppContext();
    const location = useLocation();
    const theme = useTheme();

    // Pre-fill service if navigated from a service card
    useEffect(() => {
        if (location.state && location.state.selectedService) {
            setFormData((prev) => ({ ...prev, service: location.state.selectedService }));
        }
    }, [ location.state ]);

    const handleChange = (e) => {
        setFormData({ ...formData, [ e.target.name ]: e.target.value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, date: date });
    };

    const handleTimeChange = (time) => {
        setFormData({ ...formData, time: time });
    };

    const validateForm = () => {
        const { name, phone, email, service, date, time } = formData;
        if (!name || !phone || !email || !service || !date || !time) {
            showSnackbar('Please fill in all required fields.', 'error');
            return false;
        }
        if (!/^\\S+@\\S+\\.\\S+$/.test(email)) {
            showSnackbar('Please enter a valid email address.', 'error');
            return false;
        }
        if (!/^\\d{10}$/.test(phone)) {
            showSnackbar('Please enter a valid 10-digit phone number.', 'error');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        // Simulate API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
            console.log('Appointment booked:', formData);
            showDialog(
                'Appointment Confirmed!',
                `Thank you, ${formData.name}! Your appointment for ${formData.service} on ${dayjs(formData.date).format('MM/DD/YYYY')} at ${dayjs(formData.time).format('h:mm A')} has been successfully booked. We've sent a confirmation to ${formData.email}.`,
                <Button onClick={ hideDialog } color="primary" autoFocus>
                    OK
                </Button>
            );
            setFormData({
                name: '',
                phone: '',
                email: '',
                service: '',
                date: null,
                time: null,
                notes: '',
            });
            // showSnackbar('Appointment booked successfully!', 'success'); // This will be shown after dialog closes
        } catch (error) {
            console.error('Booking error:', error);
            showSnackbar('Failed to book appointment. Please try again.', 'error');
        } finally {
            setLoading(false);
        }
    };

    const whatsappMessage = `Hello Chaitali Parlour, I'd like to book an appointment for ${formData.service || 'a service'}. My name is ${formData.name || '...'}, and my phone number is ${formData.phone || '...'}. Preferred Date: ${formData.date ? dayjs(formData.date).format('MM/DD/YYYY') : '...'}, Time: ${formData.time ? dayjs(formData.time).format('h:mm A') : '...'}. Notes: ${formData.notes || '...'}.`;
    const whatsappLink = `https://wa.me/919130008625?text=${encodeURIComponent(whatsappMessage)}`; // Replace with your WhatsApp number

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
                title="Book Appointment | Chaitali Parlour - Schedule Your Beauty Session"
                description="Book your next beauty appointment with Chaitali Parlour online. Choose from our range of services: facials, hair care, bridal makeup, and more."
                keywords="book beauty appointment, schedule salon, online booking, parlour appointment, beauty salon booking pune"
                canonical="https://chaitali-parlour.netlify.app/book"
            />
            <Box sx={ { pt: 12, pb: 8, background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)` } }>
                <Container maxWidth="sm">
                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        animate={ { y: 0, opacity: 1 } }
                        transition={ { duration: 0.7 } }
                    >
                        <Typography variant="h2" align="center" gutterBottom sx={ { color: theme.palette.primary.contrastText, mb: 2, textShadow: '1px 1px 3px rgba(0,0,0,0.2)' } }>
                            Book Your Appointment
                        </Typography>
                        <Typography variant="body1" align="center" color="primary.contrastText" paragraph sx={ { mb: 4 } }>
                            Fill out the form below to schedule your visit. We look forward to seeing you!
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        whileInView={ { y: 0, opacity: 1 } }
                        viewport={ { once: true, amount: 0.2 } }
                        transition={ { duration: 0.7, delay: 0.1 } }
                    >
                        <Card sx={ { 
                            p: 4, 
                            borderRadius: 4, 
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            boxShadow: theme.shadows[10],
                        } }>
                            <form onSubmit={ handleSubmit }>
                                <Grid container spacing={ 3 }>
                                    <Grid item xs={ 12 }>
                                        <motion.div variants={formVariants} initial="hidden" animate="visible" custom={0}>
                                            <TextField
                                                fullWidth
                                                label="Your Name"
                                                name="name"
                                                value={ formData.name }
                                                onChange={ handleChange }
                                                required
                                                variant="filled"
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start"><PersonOutlineIcon /></InputAdornment>,
                                                }}
                                            />
                                        </motion.div>
                                    </Grid>
                                    <Grid item xs={ 12 } sm={ 6 }>
                                        <motion.div variants={formVariants} initial="hidden" animate="visible" custom={1}>
                                            <TextField
                                                fullWidth
                                                label="Phone Number"
                                                name="phone"
                                                value={ formData.phone }
                                                onChange={ handleChange }
                                                required
                                                type="tel"
                                                variant="filled"
                                                inputProps={ { maxLength: 10 } }
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start"><PhoneOutlinedIcon /></InputAdornment>,
                                                }}
                                            />
                                        </motion.div>
                                    </Grid>
                                    <Grid item xs={ 12 } sm={ 6 }>
                                        <motion.div variants={formVariants} initial="hidden" animate="visible" custom={2}>
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                name="email"
                                                value={ formData.email }
                                                onChange={ handleChange }
                                                required
                                                type="email"
                                                variant="filled"
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>,
                                                }}
                                            />
                                        </motion.div>
                                    </Grid>
                                    <Grid item xs={ 12 }>
                                        <motion.div variants={formVariants} initial="hidden" animate="visible" custom={3}>
                                            <TextField
                                                fullWidth
                                                select
                                                label="Preferred Service"
                                                name="service"
                                                value={ formData.service }
                                                onChange={ handleChange }
                                                required
                                                variant="filled"
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start"><BookOnlineOutlinedIcon /></InputAdornment>,
                                                }}
                                            >
                                                { servicesData.map((service) => (
                                                    <MenuItem key={ service.id } value={ service.name }>
                                                        { service.name }
                                                    </MenuItem>
                                                )) }
                                            </TextField>
                                        </motion.div>
                                    </Grid>
                                    <Grid item xs={ 12 } sm={ 6 }>
                                        <motion.div variants={formVariants} initial="hidden" animate="visible" custom={4}>
                                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                                <DatePicker
                                                    label="Preferred Date"
                                                    value={ formData.date }
                                                    onChange={ handleDateChange }
                                                    slotProps={ { textField: { fullWidth: true, required: true, variant: 'filled' } } }
                                                />
                                            </LocalizationProvider>
                                        </motion.div>
                                    </Grid>
                                    <Grid item xs={ 12 } sm={ 6 }>
                                        <motion.div variants={formVariants} initial="hidden" animate="visible" custom={5}>
                                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                                <TimePicker
                                                    label="Preferred Time"
                                                    value={ formData.time }
                                                    onChange={ handleTimeChange }
                                                    slotProps={ { textField: { fullWidth: true, required: true, variant: 'filled' } } }
                                                />
                                            </LocalizationProvider>
                                        </motion.div>
                                    </Grid>
                                    <Grid item xs={ 12 }>
                                        <motion.div variants={formVariants} initial="hidden" animate="visible" custom={6}>
                                            <TextField
                                                fullWidth
                                                label="Additional Notes (optional)"
                                                name="notes"
                                                value={ formData.notes }
                                                onChange={ handleChange }
                                                multiline
                                                rows={ 4 }
                                                variant="filled"
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start"><NotesOutlinedIcon /></InputAdornment>,
                                                }}
                                            />
                                        </motion.div>
                                    </Grid>
                                    <Grid item xs={ 12 }>
                                        <motion.div variants={formVariants} initial="hidden" animate="visible" custom={7} whileHover={{scale: 1.02}} whileTap={{scale: 0.98}}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                                size="large"
                                                disabled={ loading }
                                                startIcon={ loading ? <CircularProgress size={ 20 } color="inherit" /> : <EventAvailableIcon /> }
                                                sx={{py: 1.5}}
                                            >
                                                { loading ? 'Booking...' : 'Confirm Appointment' }
                                            </Button>
                                        </motion.div>
                                    </Grid>
                                    <Grid item xs={ 12 } sx={ { textAlign: 'center' } }>
                                        <Typography variant="body2" color="text.secondary" sx={ { my: 2 } }>
                                            OR
                                        </Typography>
                                        <motion.div whileHover={ { scale: 1.05 } } whileTap={ { scale: 0.95 } }>
                                            <Button
                                                variant="outlined"
                                                color="success"
                                                href={ whatsappLink }
                                                target="_blank"
                                                fullWidth
                                                size="large"
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
                                                Book via WhatsApp
                                            </Button>
                                        </motion.div>
                                    </Grid>
                                </Grid>
                            </form>
                        </Card>
                    </motion.div>
                </Container>
            </Box>
        </motion.div>
    );
};

export default BookAppointment;

