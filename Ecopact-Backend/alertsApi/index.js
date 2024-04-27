const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const { notFound, errorHandler } = require("./middlewares/errors");
const { alertsRoutes } = require('./routes/alertsRoutes');
const app=express();
const port=3001;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:'http://localhost:5173'
}));
app.use('/api/alerts',alertsRoutes);


app.use(notFound);

app.use(errorHandler);

mongoose.connect(process.env.DB_URI).then(
    ()=>{
        app.listen(port,()=>{
            console.log("connected to database");
            console.log(`http://localhost:${port}`);
            
        })
    }
).catch((err)=> console.log(err.message));
