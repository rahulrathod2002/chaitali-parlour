import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#FFC0CB', // Soft Pink
        },
        secondary: {
            main: '#DAA520', // Gold
        },
        background: {
            default: '#FFFFFF', // White
            paper: '#FDF5E6', // A slightly off-white, elegant tone
        },
        text: {
            primary: '#333333',
            secondary: '#666666',
        },
    },
    typography: {
        fontFamily: [ 'Poppins', 'Cormorant Garamond', 'sans-serif' ].join(','),
        h1: {
            fontFamily: 'Cormorant Garamond',
            fontWeight: 700,
        },
        h2: {
            fontFamily: 'Cormorant Garamond',
            fontWeight: 600,
        },
        body1: {
            fontFamily: 'Poppins',
        },
        button: {
            fontWeight: 600,
            textTransform: 'none',
        },
    },
    spacing: 8,
    shape: {
        borderRadius: 8,
    },
    shadows: [ 'none', '0px 4px 20px rgba(0,0,0,0.05)', ...Array(23).fill('none') ],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 50,
                    padding: '10px 24px',
                    fontWeight: 600,
                    textTransform: 'none',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                },
                containedPrimary: {
                    background: 'linear-gradient(45deg, #FFC0CB 30%, #FF99AC 90%)', // Pink to a slightly stronger pink
                    border: 0,
                    color: '#333333',
                    boxShadow: '0 3px 5px 2px rgba(255, 182, 193, .3)',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 5px 10px 4px rgba(255, 182, 193, .4)',
                    },
                    '&.Mui-disabled': {
                        background: '#e0e0e0',
                        color: '#9e9e9e',
                        boxShadow: 'none',
                        transform: 'none',
                    },
                },
                outlinedPrimary: {
                    borderWidth: '2px',
                    '&:hover': {
                        borderWidth: '2px',
                        transform: 'scale(1.05)',
                        backgroundColor: 'rgba(255, 192, 203, 0.1)' // Faint pink background on hover
                    }
                }
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0px 8px 25px rgba(0,0,0,0.08)',
                    },
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
