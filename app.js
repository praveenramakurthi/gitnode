const express=require('express');

const app = express();

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});

app.get("/home",(req, res)=>{
    res.send('<h1>welcome to the home page<h1/>');
})

app.post("/home",(req, res)=>{
    console.log("Browser requested");
    res.send('<h1>Post request<h1/>');
})

app.patch("/home",async(req, res)=>{
    const updatedata = await Model.getByIdandUpdate(req.params.id,req.body);
    console.log(updatedata);
})