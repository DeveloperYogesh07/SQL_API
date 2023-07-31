const express = require("express");

const router = express.Router();

const authorization = require('../auth/token_validatiion')

const {
  getAllUsers,
  createNewUser,
  updateUserById,
  deleteUserById,
  login,
} = require("../controller/controller");

router.get("/users",authorization, getAllUsers);

router.post("/user",authorization,  createNewUser);

router.patch("/user/:id",authorization,  updateUserById);

router.delete("/user/:id",authorization,  deleteUserById);

router.post("/user/login", login);

module.exports = router;
