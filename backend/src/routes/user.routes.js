const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const {
  updateUser,
  deleteUser,
  getUser,
  getFriends,
  followUser,
  unfollowUser,
} = require("../controllers/user");
const router = require("express").Router();

router.get("/api/test/all", controller.allAccess);

router.get("/api/test/user", [authJwt.verifyToken], controller.postBoard);

router.get(
  "/api/test/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.adminBoard
);

//update User
router.put("/api/users/:id", updateUser);

//delete user
router.delete("/api/users/:id", deleteUser);

//get a user
router.get("/api/users/:id", getUser);

//get friends
router.get("/api/users/friends/:userId", getFriends);

//follow a user
router.put("/api/users/:id/follow", followUser);

//unfollow a user
router.put("/api/users/:id/unfollow", unfollowUser);

module.exports = router;
