const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const router = require("express").Router();

router.post(
  "/api/auth/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  controller.signup
);

router.post("/api/auth/signin", controller.signin);

module.exports = router;
