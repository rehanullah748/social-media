
const userModel = require("../models/user");

module.exports.updateProfile = async (req, res) => {
    
   
    try {
        const user = await userModel.findOne({_id: req.user._id})
        if(!user) {
            return res.status(404).json({error: "user not found"})
        }
       
       await userModel.updateOne({_id: req.user._id}, {$set: {...req.body}})
       return res.status(201).json({msg: "your profile has been updated"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "server internal error"})
    }
}