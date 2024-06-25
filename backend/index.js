const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const RenderUser = require('./modals/RenderSchema');
const port='8900';


const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/render')
.then(console.log("Data base connected sucessfully"))


app.post('/contact',async(req,res)=>{
    const{name,email}=req.body;
    
    const logData= new RenderUser(
        {
            name:name,
            email:email
        }
    )
    try{
        await logData.save();
        res.send("data inserted sucessfully");
    }catch(err){
        console.log(err);
    }
})


app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})