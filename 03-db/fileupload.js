const express = require('express');
const app = express();
const multer = require('multer'); // Ladda in multer
const morgan =require('morgan');


app.use(morgan('short'));
app.use(express.static('static'));

/*
const urlencoded = express.urlencoded({ extended: false});
const jsonencoder = express.json();
// app.use(urlencoded);
*/

const storageObject = multer.diskStorage(
    {
        destination: (req, file, cb) => { 
            cb(null, 'uploads');            // Vart vilen ska sparas
        },
        filename: (req, file, cb) => { 
            cb(null, Date.now() + "-" + file.originalname); // Vad filen ska heta
        }
    }
);
const multipartdataEncoder = multer({ storage: storageObject });

app.post('/upload', multipartdataEncoder.single('myFile'), (req, res) => {
    console.log(req.file);
    res.send(req.file);
});


app.listen(3000, function(){
    console.log('Server started at http://localhost:3000');
});