const { validationResult } = require("express-validator");
const postModel = require("../models/post");
const CommentModel = require("../models/comment");
module.exports.createPost = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { body, postImage, user } = req.body;
    const createdPost = await postModel.create({ body, postImage, user });
    return res
      .status(200)
      .json({ post: createdPost, msg: "post has been created" });
  } else {
    return res.status(400).json({ error: errors.array() });
  }
};

module.exports.getPost = async (req, res) => {
  try {
    const getPosts = await postModel
      .find({ user: req.user._id })
      .populate("user", "-password");
    return res.status(200).json({ getPosts });
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};
module.exports.deletePost = async (req, res) => {
  const { id } = req.params;
  if (!id || id === "") {
    return res.status(400).json({ msg: "id is required" });
  }
  try {
    await postModel.deleteOne({ $and: [{ _id: id }, { user: req.user._id }] });
    return res.status(200).json({ msge: "post has been deleted" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
module.exports.updatePost = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const { body, postImage, user } = req.body;
      const { id } = req.params;
      await postModel.findOneAndUpdate(
        { $and: [{ _id: id }, { user: req.user._id }] },
        {
          $set: {
            body,
            postImage,
            user,
          },
        }
      );
      res.status(200).json({ msg: "post has been updated" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  } else {
    return res.status(200).json({ error: errors.array() });
  }
};
module.exports.createComment = async (req, res) => {
  const { body, post } = req.body;
  if (!body || body.trim() === "" || body === undefined) {
    return res.status(400).json({ error: "message body is required" });
  }
  if (!post || post.trim() === "" || post === undefined) {
    return res.status(400).json({ error: "post id is required" });
  }
  try {
    await CommentModel.create({ ...req.body, user: req.user._id });
    return res.status(200).json({ msg: "Comment published" });
  } catch (error) {
    return res.status(500).json({ error: "Server internal error" });
  }
};
