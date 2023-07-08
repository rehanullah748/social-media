
const userModel = require("../models/user");

module.exports.updateProfile = async (req, res) => {
    let { name } = req.body;
   
    try {
        const user = await userModel.findOne({_id: req.user._id})
        if(!user) {
            return res.status(404).json({error: "user not found"})
        }
        if(!name || name.trim() === "" || name === undefined) {
            name = user.name;
        }
       await userModel.updateOne({_id: req.user._id}, {$set: {...req.body}})
       return res.status(201).json({msg: "your profile has been updated"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "server internal error"})
    }
}