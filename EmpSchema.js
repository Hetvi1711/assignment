const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:<password>@17112000.v3osc.mongodb.net/test?retryWrites=true&w=majority')

let company = new mongoose.Schema({
    name:String,
    age:Number,
    gender:{type : String, default: 'M'},
    phone : {type : String, unique:true},
    email : {type : String, unique:true},
    address : String,
    salary : Number,
    created : {type : Date, default:Date.now}

})

let emp = mongoose.model("company", company);

module.exports = emp