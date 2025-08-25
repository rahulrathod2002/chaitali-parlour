import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { useTheme } from '@mui/material';
import { TextureLoader } from 'three';
import logo from '/logo1.png';

const ThreeDAccent = () => {
    const meshRef = useRef();
    const theme = useTheme();
    const texture = useLoader(TextureLoader, logo);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.y += 0.005;
        }
    });

    return (
        <Sphere ref={ meshRef } args={ [ 1, 32, 32 ] } scale={ 1 }>
            {/* <meshStandardMaterial color={ theme.palette.secondary.light } transparent opacity={ 0.8 } /> */ }
            <meshStandardMaterial map={ texture } color={ theme.palette.secondary.light } transparent opacity={ 0.8 } />
        </Sphere>
    );
};

export default ThreeDAccent;
