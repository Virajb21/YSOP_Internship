const {
    signUserUp,
    signUserIn,
    logUserOut,
    getLoggedInUser,
  } = require("../controllers/user.controller.js");

const {
    validateUserData,
    isAuthenticated,
} = require("../middlewares/user.middleware.js");
  
  const userRouter = require("express").Router();
  
  userRouter.post("/signup", validateUserData, signUserUp);
  
  userRouter.post("/signin", signUserIn);
  
  userRouter.post("/signout", isAuthenticated, logUserOut);
  
  userRouter.get("/me", isAuthenticated, getLoggedInUser);
  
  module.exports = userRouter;