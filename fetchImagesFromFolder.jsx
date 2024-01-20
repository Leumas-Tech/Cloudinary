// fetchImages.js
import axios from 'axios';

const fetchImages = async (folderName = 'exampleFolder') => {
    return axios.get(`http://localhost:3000/cloudinary/images/${folderName}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};

export default fetchImages;
