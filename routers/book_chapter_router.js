const express = require("express");
const routesChapter = express.Router();
const bookChapterController = require("../controller/book_chapter_controller");
const middlewareDosDatosTextoNumberSC = require("../middlewares/dosDatosConvertirTextoANumeroSC");
const { idSeccion, idCapitulo, tituloCapitulo } = require("../utils/validations");
const { validations } = require("../middlewares/validations");

// ************* importo las rutas
routesChapter.get("/",  bookChapterController.getAllBookChapter);
routesChapter.get("/:idSeccion/:idCapitulo", middlewareDosDatosTextoNumberSC, bookChapterController.getBookChapterByID); /// buscar por id
routesChapter.post("/", idSeccion, idCapitulo, tituloCapitulo, validations, bookChapterController.createBookChapter); //crear capitulo
routesChapter.put("/:idSeccion/:idCapitulo", middlewareDosDatosTextoNumberSC, bookChapterController.updateBookChapter);  // actualizar un capitulo
routesChapter.delete("/:idSeccion/:idCapitulo", middlewareDosDatosTextoNumberSC, bookChapterController.deleteBookChapter);  //borrar una capitulo (ver que este vacia)


module.exports = routesChapter;