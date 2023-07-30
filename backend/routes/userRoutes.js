const express = require("express");
const {
  register,
  login,
  changePassword,
  checkToken,
} = require("../controller/authController");
const { tokenMiddleWare } = require("../middleWare/tokenMiddleWare");
const {
  passwordValidation,
  registerValidation,
  loginValidation,
} = require("../validations/userValidation");
const { updateProfile } = require("../controller/profile");
const router = express.Router();
router.post("/register", registerValidation, register);
router.post("/login", loginValidation, login);
router.put(
  "/update-password",
  [tokenMiddleWare, passwordValidation],
  changePassword
);
router.get("/check-token", checkToken);
router.put("/update-profile", tokenMiddleWare, updateProfile);
module.exports = router;
