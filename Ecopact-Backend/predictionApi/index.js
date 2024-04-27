const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
require('dotenv').config();
const port=3004;
const { predictionRoutes } = require('./routes/predictionRoutes');
const { notFound, errorHandler } = require('./middlewares/errors');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:'http://localhost:5173'
}));


app.use('/api/prediction',predictionRoutes);



//not found middleware
app.use(notFound);

//error handler middleware
app.use(errorHandler);


mongoose.connect(process.env.DB_URI).then(
    ()=>{
        app.listen(port,()=>{
            console.log(`connected to database`);
            console.log(`http://localhost:${port}`);
            
        })
    }
).catch((err)=> console.log(err.message));