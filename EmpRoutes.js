const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = express.Router();
const emp = require('./EmpSchema')


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

router.get("/", (req,res)=>{
    emp.find({}, (err,emp)=>{
        if(err){
            console.log(err)
        }else{
            res.send(emp)
        }
    })
})

router.post('/het',(req,res)=>{
    const body = req.body;
    console.log(body);
    let emp = Emp(req.body)
    emp.save().then(()=>{
        res.status(202).send("hello");
    })
})

router.post("/emp", upload.array("image"), (req,res)=>{
    let employ = req.body
emp.create(employ,(err,emp)=>{
    if(err){
        console.log(err)
    }else{
        console.log(emp)
    }
})

})

router.get("/emp/:id", (req,res)=>{
    let gender = {gender : req.params.id}

    emp.find(gender, (err,emp)=>{
        if(err){
            console.log(err)
        }else{
            res.send(emp)
        }
    })
})

router.get("/find/:id1/:id2", (req,res)=>{
    console.log(req.params.id1, req.params.id2)
    emp.find({salary : {$gt:req.params.id1, $lt:req.params.id2}}, (err,emp)=>{
        if(err){
            console.log(err)
        }else{
            res.send(emp)
        }
    })
})

module.exports = router