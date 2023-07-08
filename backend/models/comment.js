const mongoose = require("mongoose")
const commentSchema = mongoose.Schema({
    body: {
        required: true,
        type: String,
    },
    
    user: { type: mongoose.Types.ObjectId, ref: "user"},
    
},

{ timestamps: true }

)
const commentModel = mongoose.model("comment", commentSchema)
module.exports = commentModel;