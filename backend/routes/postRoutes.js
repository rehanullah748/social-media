const express = require("express");
const { tokenMiddleWare } = require("../middleWare/tokenMiddleWare");
const {
  createPost,
  getPosts,
  getAllPosts,
  deletePost,
  updatePost,
  createComment,
  deleteComment,
  updateComment,
} = require("../controller/post");
const { postValidation } = require("../validations/userValidation");
const router = express.Router();
router.post("/create-post", [postValidation, tokenMiddleWare], createPost);
router.get("/get-posts", tokenMiddleWare, getPosts);
router.get("/get-all-posts", getAllPosts);
router.get("/delete-post/:id", tokenMiddleWare, deletePost);
router.post("/update-post/:id", tokenMiddleWare, updatePost);
router.post("/create-comment", tokenMiddleWare, createComment);
router.delete(
  "/delete-comment/:commentId/:postId",
  tokenMiddleWare,
  deleteComment
);
router.put("/update-comment", tokenMiddleWare, updateComment);

module.exports = router;
