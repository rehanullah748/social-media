const express = require("express");
const { tokenMiddleWare } = require("../middleWare/tokenMiddleWare");
const { createPost, getPost, deletePost, updatePost } = require("../controller/post");
const { postValidation } = require("../validations/userValidation");
const router = express.Router();
router.post("/create-post",[postValidation, tokenMiddleWare], createPost)
router.get("/get-posts", tokenMiddleWare, getPost)
router.get("/delete-post/:id", tokenMiddleWare, deletePost)
router.post("/update-post/:id", tokenMiddleWare, updatePost)

module.exports = router;