const express = require('express')
const router = express.Router();
const app = express();
const port = 4000 || process.env.PORT
const userRoutes = require('./EmpRoutes');
const emp = require('./EmpSchema');


const Multer = require("multer")//upload file 
const storage = Multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './public/images' )
    },
    filename : function(req, file, cb){
        cb(null, file.originalname + '.png' );
    }}
);

const upload = Multer({storage : storage})



app.use(userRoutes);


app.listen(port, (req,res)=>{
    console.log('Server started on '+port)
})