const router = require("express").Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const {
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  timelinePost,
  usersAllPosts,
} = require("../controllers/post");

router.get("/api/test/user", [authJwt.verifyToken], controller.postBoard);
//create tweet
router.post("/post_tweet", createPost);  //done

//update a post
router.put("/:id", updatePost);  //done

//delete a post
router.delete("/:id", deletePost);  //done

//like / dislike a post
router.put("/:id/like", likePost);

//get a post
router.get("/:id", getPost);  //done

//get timeline posts
router.get("/timeline/:userId", timelinePost); //done

//get user's all posts
router.get("/profile/:username", usersAllPosts);  //done

module.exports = router;
