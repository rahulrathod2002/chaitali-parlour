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
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                    },
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;