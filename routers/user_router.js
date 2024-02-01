const express = require("express");
const routesUser = express.Router();
const userController = require("../controller/user_controller");

// ************* importo las rutas

routesUser.get("/", userController.getAllUser);
routesUser.get("/:id", userController.getUserByID);
routesUser.post("/", userController.createUser);
routesUser.put("/:id", userController.updateUser);
routesUser.delete("/:id", userController.deleteUser);
routesUser.get("/:nombreusuario/:clave", userController.loginUser);


module.exports = routesUser;