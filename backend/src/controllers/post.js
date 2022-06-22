const producer = require("../kafka/producer");
const db = require("../models");
const User = db.user;
const Post = db.post;

const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    producer(JSON.stringify(savedPost));
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
      await post.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
};

/* const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      producer("the post has been updated");
      res.status(200).json("the post has been updated");
    } else {
      producer("you can update only your post");
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}; */

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

/* const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log(req.body)
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      producer("the post has been deleted");
      res.status(200).json("the post has been deleted");
    } else {
      producer("you can delete only your post");
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}; */

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      producer("The post has been liked");
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      producer("The post has been disliked");
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    producer(JSON.stringify(post));
    res.status(200).json(post);
  } catch (err) {
    producer(JSON.stringify(err));
    res.status(500).json(err);
  }
};

const timelinePost = async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
};

const usersAllPosts = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id }).sort({"updatedAt":-1});
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  timelinePost,
  usersAllPosts,
};
