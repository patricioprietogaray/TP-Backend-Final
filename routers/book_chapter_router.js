const express = require("express");
const routesChapter = express.Router();
const bookChapterController = require("../controller/book_chapter_controller");

// ************* importo las rutas
routesChapter.get("/", bookChapterController.getAllBookChapter);
routesChapter.get("/:id", bookChapterController.getBookChapterByID); /// buscar por id
//routesSection.post("/") // crear una nueva seccion
//routesSection.put("/")  // actualizar una nueva seccion
//routesSection.delete("/")  //borrar una seccion (ver que este vacia)
module.exports = routesChapter;