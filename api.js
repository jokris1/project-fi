// const express = require('express');
// const app = express();
// // body parser middleware
// const bodyParser = require('body-parser');
// const cors = require('cors');
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// // multer
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' });

// // app.post('/upload', upload.single("nintendo"), function (req, res, next) {
// //   console.log(req.body);
// // });

// // app.post('/upload', upload.single("file"), function (req, res) {
// //     console.log(req.file);
// //     console.log(req.files);
// //   })


// EXPRESS, CORS
const express = require('express')
const cors = require('cors');
//CREATE EXPRESS APP
const app = express();
app.use(cors());
// FILE HANDLER
const multer  = require('multer')
// RENAMING FILES
const path = require('path');
const fs = require('fs');
// IMAGE PATH
var imagePath = path.join(path.resolve(__dirname), 'public/Images/');
// METADATA
const sharp = require("sharp");

// UPLOAD HANDLER
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/Images/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({ storage: storage })



app.post('/upload', upload.single("myFile"), function (req, res) {
    console.log(req.file)
    console.log(req.body);
});


// ROUTES WITH MIDDLEWARE FUNCTIONS
app.get('/images', (req, res) => {
    try {
        let imageArray = [];
        let metadata = {};
    
        // get array of images
        fs.readdir(imagePath , async function (err, images) {    
            // get metadata object and add filename.png
            if (images) {
                for (const image of images) {
                    metadata = await sharp('public/Images/' + image).metadata();
                    metadata.url = image;
                    imageArray.push(metadata);
                };
        
                // send data to frontend
                res.send(imageArray);
            }
        })
    }
    catch (error) {
        console.log(error);
    }

});


const port = 5000;
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));





