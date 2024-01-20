# Cloudinary

## Frotnend

npm install axios


## Backend

mkdir backend
cd backend
npm init -y
npm install express axios cors stream cloudinary multer streamifier express-fileupload


setup your frontend env 

and then setup your backend env



// config/cloudinaryConfig.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;


## Backend ENV should look like
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=


and from there you should be good to go using these backend routes
