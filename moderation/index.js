const express=require("express");
const bodyParser=require("body-parser");
const axios=require("axios");


const app=new express();
app.use(bodyParser.json());


app.post("/events",async (req,res)=>{

});


app.listen(4003,()=>{
 console.log('Moderation listening on port 4003');
});