import React from 'react';

const BackgroundImage = ({src}) => {
    return (
        <>
            <img className="background-image" src={src} alt="Background"/>
        </>
    );
};

export default BackgroundImage;