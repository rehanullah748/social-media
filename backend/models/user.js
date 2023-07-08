const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    userName: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    image: {
        required: false,
        type: String,
    },
    bio: {
        required : false,
        type: String,
        
    },
    dob: {
        required: false,
        type: String,
    },
    b_group: {
    required: false,
    type: String,
    },
    country: {
        required: false,
        type: String,

    },
},

{ timestamps: true }

)
const userModel = mongoose.model("user", userSchema)
module.exports = userModel;