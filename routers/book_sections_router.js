const express = require("express");
const routesSection = express.Router();
const bookSectionController = require("../controller/book_section_controller");

// ************* importo las rutas
routesSection.get("/", bookSectionController.getAllBookSection);
routesSection.get("/:id", bookSectionController.getBookSectionByID) /// buscar por id
routesSection.post("/") // crear una nueva seccion
routesSection.put("/")  // actualizar una nueva seccion
routesSection.delete("/")  //borrar una seccion (ver que este vacia)

module.exports = routesSection;