import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#b85c7a',
            light: '#d989a1',
            dark: '#8f3e5d',
            contrastText: '#fffaf8',
            soft: 'rgba(184, 92, 122, 0.10)',
        },
        secondary: {
            main: '#d8a48f',
            light: '#edd1c4',
            dark: '#b87a62',
            contrastText: '#40231e',
        },
        background: {
            default: '#fff7f5',
            paper: '#fffdfb',
        },
        text: {
            primary: '#2f2430',
            secondary: '#6e5b67',
        },
        divider: 'rgba(89, 55, 66, 0.12)',
        surface: {
            base: '#fff7f5',
            card: '#fffdfb',
            muted: '#f9ece8',
            dark: '#4b2734',
            deep: '#24141d',
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
        borderRadius: 12,
    },
    shadows: [
        'none',
        '0px 10px 30px rgba(92, 56, 68, 0.06)',
        '0px 14px 34px rgba(92, 56, 68, 0.08)',
        '0px 18px 40px rgba(92, 56, 68, 0.10)',
        '0px 24px 50px rgba(92, 56, 68, 0.12)',
        '0px 28px 56px rgba(92, 56, 68, 0.14)',
        ...Array(19).fill('0px 32px 72px rgba(92, 56, 68, 0.16)'),
    ],
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: 'linear-gradient(180deg, #fff7f5 0%, #fffdfb 100%)',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 50,
                    padding: '12px 26px',
                    fontWeight: 600,
                    textTransform: 'none',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #b85c7a 0%, #d989a1 100%)',
                    border: 0,
                    color: '#fffaf8',
                    boxShadow: '0 12px 30px rgba(184, 92, 122, 0.25)',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 16px 34px rgba(184, 92, 122, 0.3)',
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
                    borderColor: '#d7b2bf',
                    '&:hover': {
                        borderWidth: '2px',
                        transform: 'translateY(-2px)',
                        backgroundColor: 'rgba(184, 92, 122, 0.06)'
                    }
                }
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 14,
                    backgroundColor: '#fffdfb',
                    border: '1px solid rgba(89, 55, 66, 0.08)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: '0px 22px 50px rgba(92, 56, 68, 0.14)',
                    },
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
