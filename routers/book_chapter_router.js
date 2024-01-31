const express = require("express");
const routesChapter = express.Router();
const bookChapterController = require("../controller/book_chapter_controller");

// ************* importo las rutas
routesChapter.get("/", bookChapterController.getAllBookChapter);
routesChapter.get("/:id", bookChapterController.getBookChapterByID); /// buscar por id
routesChapter.post("/", bookChapterController.createBookChapter); //crear capitulo
routesChapter.put("/:id", bookChapterController.updateBookChapter);  // actualizar un capitulo
routesChapter.delete("/:id", bookChapterController.deleteBookChapter);  //borrar una capitulo (ver que este vacia)


module.exports = routesChapter;