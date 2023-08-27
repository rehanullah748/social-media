const mongoose = require("mongoose");
const connect = async (req, res) => {
  try {
    await mongoose.connect(process.env.mongoDB);
    console.log("DB connected");
  } catch (error) {
    console.log("Connection error => ", error);
  }
};
module.exports = connect;

module.exports.changePassword = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { currentPassword, newPassword } = req.body;
    try {
      // get user from db
      const user = await userModel.findOne({ _id: req.user._id });
      if (user) {
        const matched = await bcrypt.compare(currentPassword, user.password);
        if (matched) {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(newPassword, salt);
          await userModel.updateOne(
            { _id: req.user._id },
            { $set: { password: hashedPassword } }
          );
          return res.status(201).json({ msg: "password has been updated" });
        }
        return res.status(400).json({ error: "password not matched" });
      } else {
        // user not found
        return res.status(404).json({ error: "user not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    // validation failed
    return res.status(400).json({ errors: errors.array() });
  }
};
