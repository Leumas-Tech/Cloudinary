import React, { useState } from 'react';
import axios from 'axios';
import { useAuthUser } from 'react-auth-kit';

function UploaderToCloudinary({ onUpload }) {
    const [file, setFile] = useState(null);
    const auth = useAuthUser();

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            console.error('No file selected for upload');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const token = auth()?.token;
            const uploadResponse = await axios.post(
                `${import.meta.env.VITE_REACT_APP_LEUMAS_API_ENDPOINT}/cloudinary/uploadfile`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        // Do not set 'Content-Type': 'multipart/form-data'
                    },
                }
            );
            onUpload(uploadResponse.data.imageUrl);
        } catch (error) {
            console.error('Error uploading to Cloudinary:', error);
        }
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
            />
            <button onClick={handleUpload}>Upload to Cloudinary</button>
        </div>
    );
}

export default UploaderToCloudinary;


// When a user who is logged in uploads an image, we need to save that image for the user logged in so we know it what them that uploaded it, and that image is theirs, we can do this by adding in a createItem

// create a new schema, called link, and allow us to give them types, we will create a new link with type image, type should just be a string, and by default it will be image, we can also give it base schema, or some things from base schema

// Also allow bulk upload here, but we must limit the amount of images they can store with us 

// If they dont have a leumasId, we will let them upload 20 images, 

// Instead of upload to cloudinary, we should allow the user to toggle the endpoint where everything gets saved, and even give them the option to give their own custom endpoint 