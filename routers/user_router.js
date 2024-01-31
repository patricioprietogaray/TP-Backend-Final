const express = require("express");
const routesUser = express.Router();
const userController = require("../controller/user_controller");

// ************* importo las rutas

routesUser.get("/", userController.getAllUser);
routesUser.get("/password", userController.createUser);

module.exports = routesUser;