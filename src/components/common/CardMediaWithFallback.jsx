import React, { useState } from 'react';
import { CardMedia } from '@mui/material';

const CardMediaWithFallback = ({ src, placeholder = 'https://placehold.co/600x400?text=Image+Not+Found', ...rest }) => {
    const [ imgSrc, setImgSrc ] = useState(src);

    const handleError = () => {
        setImgSrc(placeholder);
    };

    return (
        <CardMedia
            image={ imgSrc }
            onError={ handleError }
            loading="lazy"
            { ...rest }
        />
    );
};

export default CardMediaWithFallback;
