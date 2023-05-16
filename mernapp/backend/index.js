const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8000;
const mongoDB = require("./db");

mongoose.connect('mongodb+srv://gofood:gofood123@cluster0.cph8vna.mongodb.net/gofoodmern?retryWrites=true&w=majority',{
    // useCreateIndex:true,
    //  useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successfull");
    const fetched_data =mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(function(err,data){
      if(err) console.log(err);
      else console.log(data);
    });
}).catch((e)=>{
    console.log("no connection ");
});

app.use(express.json());
app.use('/api/', require("./Routes/CreateUser"));

app.get('/', (req, res) => {
  res.send('Hello World! ------');
});


app.listen(port,() => {
  console.log(`Example app listening on port ${port}`);
});
