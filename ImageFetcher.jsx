// ImageFetcher.jsx
import React, { useState, useEffect } from 'react';
import fetchImages from './fetchImagesFromFolder'; // Adjust the import path based on your project structure

const ImageFetcher = ({folderName = "exampleFolder"}) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchImages(folderName) // Call the utility function
            .then(data => {
                console.log(data)
                setImages(data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading images...</p>;
    if (error) return <p>Error loading images: {error}</p>;

    return (
        <div>
            {images.map((url, index) => (
                <img key={index} src={url} alt={`Image ${index}`} />
            ))}
        </div>
    );
};

export default ImageFetcher;
