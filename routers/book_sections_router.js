const express = require("express");
const routesSection = express.Router();
const bookSectionController = require("../controller/book_section_controller");
const middlewareTextoNumber = require("../middlewares/unDatoConvertirTextoANumero");

// ************* importo las rutas
routesSection.get("/", bookSectionController.getAllBookSection);
// en las rutas hay middleware para filtrar, este filtro evita que 
// se genere un error en el servidor el middleware convertira 
// el id recibido (en string) a un numero (number).
routesSection.get("/:id", middlewareTextoNumber, bookSectionController.getBookSectionByID); /// buscar por id
routesSection.post("/", bookSectionController.createBookSection); // crear una nueva seccion
routesSection.put("/:id", middlewareTextoNumber, bookSectionController.updateBookSection);  // actualizar una nueva seccion
routesSection.delete("/:id", middlewareTextoNumber, bookSectionController.deleteBookSection);  //borrar una seccion (ver que este vacia)

module.exports = routesSection;