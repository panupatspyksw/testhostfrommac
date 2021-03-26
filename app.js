const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')
const port = process.env.PORT || 3000
app.get('/',(req,res)=>{
    res.send("HELLO WORLD")
});
app.get('/2',(req,res)=>{
    res.send("HELLO 2")
});


app.listen(port,()=>{
    console.log("server connect ");
})