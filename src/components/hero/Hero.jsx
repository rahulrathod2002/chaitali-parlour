import React, { Suspense } from 'react';
import { Box, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimatedText from './AnimatedText';
import ThreeDAccent from './ThreeDAccent';
import CallToActions from '../shared/CallToActions';

const Hero = () => {
    const theme = useTheme();
    return (
        <Box
            sx={ {
                position: 'relative',
                height: '80vh',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.primary.contrastText,
                overflow: 'hidden',
                background: `linear-gradient(135deg, ${theme.palette.primary.main}80, ${theme.palette.secondary.main}80), url(https://placehold.co/1920x1080/FFC0CB/FFFFFF?text=Chaitali+Parlour) center/cover no-repeat`,
                backgroundAttachment: 'fixed',
            } }
        >
            <Box
                sx={ {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.3)', // Dark overlay for text readability
                    zIndex: 1,
                } }
            />
            {/* Subtle 3D Canvas */ }
            <Box
                sx={ {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                } }
            >
                <Canvas camera={ { position: [ 0, 0, 5 ], fov: 75 } }>
                    <ambientLight intensity={ 0.5 } />
                    <pointLight position={ [ 10, 10, 10 ] } intensity={ 1 } />
                    <Suspense fallback={ null }>
                        <ThreeDAccent />
                    </Suspense>
                    <OrbitControls enableZoom={ false } enablePan={ false } enableRotate={ false } />
                </Canvas>
            </Box>
            <Container maxWidth="md" sx={ { position: 'relative', zIndex: 2, textAlign: 'center' } }>
                <AnimatedText text="Chaitali Parlour" />
                <motion.p
                    initial={ { opacity: 0, y: 20 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { delay: 1.5, duration: 0.8 } }
                    style={ {
                        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                        marginBottom: theme.spacing(4),
                        color: theme.palette.primary.contrastText,
                    } }
                >
                    Beauty that makes you glow.
                </motion.p>
                <CallToActions />
            </Container>
        </Box>
    );
};

export default Hero;
