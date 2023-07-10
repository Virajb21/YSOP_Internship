const {
    signAdminUp,
    signAdminIn,
    logAdminOut,
    getLoggedInAdmin,
    getAllUsers
  } = require("../controllers/admin.controller.js");

const {
    validateAdminData,
    isAuthenticated,
} = require("../middlewares/admin.middleware.js");
  
  const adminRouter = require("express").Router();
  
  adminRouter.post("/signup", validateAdminData, signAdminUp);
  
  adminRouter.post("/signin", signAdminIn);
  
  adminRouter.post("/signout", isAuthenticated, logAdminOut);
  
  adminRouter.get("/me", isAuthenticated, getLoggedInAdmin);

  adminRouter.get("/getusers", isAuthenticated, getAllUsers);
  
  module.exports = adminRouter;