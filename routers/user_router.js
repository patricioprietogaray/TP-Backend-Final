const express = require("express");
const routesUser = express.Router();
const userController = require("../controller/user_controller");
const middlewareTextoNumber = require("../middlewares/convertirTextoANumero");

// ************* importo las rutas

routesUser.get("/", userController.getAllUser);
routesUser.get("/:id", middlewareTextoNumber, userController.getUserByID);
routesUser.post("/", userController.createUser);
routesUser.put("/:id", middlewareTextoNumber, userController.updateUser);
routesUser.delete("/:id", middlewareTextoNumber, userController.deleteUser);
routesUser.get("/:nombreusuario/:clave", userController.loginUser);


module.exports = routesUser;