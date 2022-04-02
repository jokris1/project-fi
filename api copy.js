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


// call all the required packages
const express = require('express')
const bodyParser= require('body-parser')
const multer = require('multer');
//CREATE EXPRESS APP
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
 


// SET STORAGE
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })






app.post('/upload', upload.single("fileName"), async (req, res, next) => {
  console.log(req);
  console.log(req.body);
});



const port = 5000;
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));





