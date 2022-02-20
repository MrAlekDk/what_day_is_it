const express = require("express");
const app = express();

app.get("/",(req,res)=>{

    res.sendFile(__dirname+'/Public/index.html');
})


app.get("/time",(req, res)=>{

    res.sendFile(__dirname+'/Public/index.html');
});


app.use(express.static(__dirname+'/Public'))
app.listen(5000,()=>{
    console.log("Now running on port: ", 8080);
});