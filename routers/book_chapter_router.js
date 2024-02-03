const express = require("express");
const routesChapter = express.Router();
const bookChapterController = require("../controller/book_chapter_controller");
const middlewareDosDatosTextoNumber = require("../middlewares/dosDatosConvertirTextoANumero");

// ************* importo las rutas
routesChapter.get("/",  bookChapterController.getAllBookChapter);
routesChapter.get("/:idSeccion/:idCapitulo", middlewareDosDatosTextoNumber, bookChapterController.getBookChapterByID); /// buscar por id
routesChapter.post("/", bookChapterController.createBookChapter); //crear capitulo
routesChapter.put("/:idSeccion/:idCapitulo", middlewareDosDatosTextoNumber, bookChapterController.updateBookChapter);  // actualizar un capitulo
//routesChapter.delete("/:id", middlewareTextoNumber, bookChapterController.deleteBookChapter);  //borrar una capitulo (ver que este vacia)


module.exports = routesChapter;