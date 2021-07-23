const express = require('express');
const Router = express.Router();

Router.get('/login',(req,res,next)=>{
    res.json({
        message :'Login Route'
    })
});

module.exports = Router;