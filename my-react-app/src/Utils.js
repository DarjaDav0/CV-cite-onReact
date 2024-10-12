import React from 'react';

class Utils extends React.Component {

    static copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
        alert('Email copied to clipboard!');
        }).catch(err => {
        console.error('Failed to copy: ', err);
        });
    };
}

export default ImageSlideshow;