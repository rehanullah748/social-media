const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const { strongPassword } = require("../util");
module.exports.register = async (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { name, userName, password, image } = req.body;
    // regular express for username letters, numbers, underscores and dashes are allowed only
    const usernameExp = /^[a-zA-Z0-9_.-]+$/;

    const usernameTest = usernameExp.test(userName);
    if (!usernameTest) {
      return res.status(400).json({
        errors: [
          {
            msg: `${userName} is invalid username letters, numbers, underscores and dashes are allowed only`,
            path: "userName",
          },
        ],
      });
    }
    const passwordExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    const passwordTest = passwordExp.test(password);
    if (!passwordTest) {
      return res.status(400).json({
        msg: `Password should be 8 characters long, it will include at least one number, one alphabetic character, one lowercase, one uppercase and one special character.`,
        path: "password",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
      // get user
      const user = await userModel.findOne({ userName });
      if (!user) {
        await userModel.create({
          name,
          userName,
          password: hashedPassword,
          image,
        });
        return res.status(200).json({ msg: "user created" });
      }
      return res.status(401).json({ error: "user is already exist" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  } else {
    return res.status(400).json({ errors: errors.array() });
  }
};
module.exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { userName, password } = req.body;
    const user = await userModel.findOne({ userName });
    if (user) {
      const matched = await bcrypt.compare(password, user.password);
      if (matched) {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
          expiresIn: "1d",
        });
        return res
          .status(200)
          .json({ logdIn: "logdIn successfully", token, userid: user._id });
      } else {
        return res.status(400).json({ msg: "password not matched" });
      }
    } else {
      return res.status(400).json({ msg: "please sign up first" });
    }
  }
  return res.status(400).json({ error: errors.array });
};

module.exports.changePassword = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { currentPassword, newPassword } = req.body;

    const passwordExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    const passwordTest = passwordExp.test(newPassword);
    if (!passwordTest) {
      return res.status(400).json({
        msg: `Password should be 8 characters long, it will include at least one number, one alphabetic character, one lowercase, one uppercase and one special character.`,
        param: "newPassword",
      });
    }
    try {
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
          return res.status(200).json({ msg: "password has been updated" });
        } else {
          return res.status(400).json({ msg: "password not matched" });
        }
      } else {
        return res.status(404).json({ msg: "user not found" });
      }
    } catch (error) {
      return res.status(400).json({ errors: error.message });
    }
  } else {
    return res.status(400).json({ errors: errors.array() });
  }
};
