const mongoose=require('mongoose');

const PostSchema =new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    }, 
    tags: {
        type: String,
        required: true
    },
    blogimage: {
         type: String,
         required : false
    },
    user : {
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model("post",PostSchema);