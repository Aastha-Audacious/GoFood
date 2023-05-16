// const express = require('express');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const mongoURI = 'mongodb+srv://gofood:gofood123@cluster0.cph8vna.mongodb.net/?retryWrites=true&w=majority';
// mongoose.connect('mongodb+srv://gofood:gofood123@cluster0.cph8vna.mongodb.net/?retryWrites=true&w=majority', {})
// const mongoDB = async()=>{
//     await mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
//     if(err) {
//         console.log("there is some problem",err);
//     }
//     else{
//         console.log("connected");
//     }
//     });
// }
// mongoose.connect('mongodb://localhost:27017/shortner',{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("connection is successfull");
// }).catch((e)=>{
//     console.log("no connection ");
// });



// module.exports= mongoDB;