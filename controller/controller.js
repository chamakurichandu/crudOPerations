const mongoose=require('mongoose');

const crudOperations =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports=mongoose.model('mydata',crudOperations)