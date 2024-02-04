const express = require("express");
const routesProvinces = express.Router();
const provincesController = require("../controller/provincias");
//const middlewareTextoNumber = require("../middlewares/convertirTextoANumero");

// ************* importo las rutas

routesProvinces.get("/", provincesController.provincias);

//routesUser.get("/", userController.getAllUser);
//routesUser.get("/:id", middlewareTextoNumber, userController.getUserByID);
//routesUser.post("/", userController.createUser);
//routesUser.put("/:id", middlewareTextoNumber, userController.updateUser);
//routesUser.delete("/:id", middlewareTextoNumber, userController.deleteUser);
//routesUser.get("/:nombreusuario/:clave", userController.loginUser);


module.exports = routesProvinces;