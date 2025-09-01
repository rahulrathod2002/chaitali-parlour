import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material';

const AnimatedText = ({ text, delay = 0, color }) => {
    const words = text.split(" ");
    const theme = useTheme();
    return (
        <motion.h1
            initial="hidden"
            animate="visible"
            variants={ {
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: delay
                    },
                },
            } }
            style={ {
                fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                textAlign: 'center',
                fontFamily: 'Cormorant Garamond',
                fontWeight: 700,
                color: color, // Use the passed color prop
                lineHeight: 1.1,
                marginBottom: theme.spacing(2),
            } }
        >
            { words.map((word, i) => (
                <motion.span
                    key={ i }
                    variants={ {
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    } }
                    style={ { display: "inline-block", marginRight: "0.25em" } }
                >
                    { word }
                </motion.span>
            )) }
        </motion.h1>
    );
};

export default AnimatedText;
