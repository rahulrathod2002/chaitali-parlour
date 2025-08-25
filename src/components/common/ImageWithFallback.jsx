import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, placeholder = 'https://placehold.co/600x400?text=Image+Not+Found', ...rest }) => {
    const [ imgSrc, setImgSrc ] = useState(src);

    const handleError = () => {
        setImgSrc(placeholder);
    };

    return (
        <img
            src={ imgSrc }
            alt={ alt }
            onError={ handleError }
            { ...rest }
        />
    );
};

export default ImageWithFallback;
