const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const PORT  = process.env.PORT || 3300;
const morgan  = require('morgan');
const cors = require('cors');
const apiRoutes = require('./Routes/Api'); 
const db = require('./config/database');
const {notFoundHandler,errorHandler} = require('./Middleware/Errors.Middleware');
app.use(cors());
app.use(morgan('dev'));
db.getConnection();
app.use('/api/v1/',apiRoutes);
app.use(notFoundHandler,errorHandler);

app.get('/',(req,res,next)=>{
    res.json({
        message:"Main Page Request Done"
    });
});

app.listen(PORT,()=>{
    console.log(`This is Running Port  ${PORT}`);
});