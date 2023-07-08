const { body } = require("express-validator")

module.exports.registerValidation = [
    body("name").not().isEmpty().trim().withMessage("name is required"),
    body("userName").not().isEmpty().trim().withMessage("email is required"),
    body("password").isLength({min: 5, max: 50}).withMessage("password should be 5 character long"),
]
module.exports.postValidation = [
    body("body").not().isEmpty().trim().withMessage("body is required"),
    body("postImage").not().isEmpty().trim().withMessage("postImage is required"),
    body("user").isLength({min: 5, max: 50}).withMessage("user is required"),
]
module.exports.passwordValidation = [
    body("currentPassword").not().isEmpty().withMessage("current password is required"),
    body("newPassword").isLength({min: 5, max: 50}).withMessage("newpassword should be 5 character long"),
    
]
