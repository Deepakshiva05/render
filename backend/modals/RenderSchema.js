const mongoose=require('mongoose');

const renderdata= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const RenderUser=mongoose.model('Renderuser',renderdata);

module.exports=RenderUser;