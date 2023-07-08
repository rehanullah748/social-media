const mongoose = require("mongoose")
const postSchema = mongoose.Schema({
    body: {
        required: true,
        type: String,
    },
    
    postImage: {
        required: false,
        type: String,
    },
   comments: [
    { type: mongoose.Types.ObjectId, ref: "comment"}
   ],

   
    user: { type: mongoose.Types.ObjectId, ref: "user"},
    
},

{ timestamps: true }

)
const postModel = mongoose.model("post", postSchema)
module.exports = postModel;