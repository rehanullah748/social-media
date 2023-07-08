const express = require("express");
const { register, login, changePassword } = require("../controller/authController");
const { tokenMiddleWare } = require("../middleWare/tokenMiddleWare");
const { passwordValidation } = require("../validations/userValidation");
const { updateProfile } = require("../controller/profile");
const router = express.Router();
router.post("/register", register)
router.post("/login", login)
router.put("/update-password", [ tokenMiddleWare, passwordValidation ], changePassword)
router.put("/update-profile", tokenMiddleWare, updateProfile)
module.exports = router;