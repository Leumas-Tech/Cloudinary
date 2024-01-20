import axios from "axios";

export const uploadToCloudinary = async (imageUrl, token) => {
    // Log imageUrl to verify its structure
    console.log("Image URL being uploaded:", imageUrl);

    try {
        const uploadResponse = await axios.post(
            `${import.meta.env.VITE_REACT_APP_LEUMAS_API_ENDPOINT}/cloudinary/upload`,
            { imageUrl: imageUrl },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            }
        );
        console.log("Response from cloudinary ", uploadResponse)
        return uploadResponse.data.imageUrl; // Return the Cloudinary URL
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw error;
    }
};
