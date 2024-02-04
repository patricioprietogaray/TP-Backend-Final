const express = require("express");
const routesTopics = express.Router();
const bookTopicController = require("../controller/book_topic_controller");
const dosDatosConvertirTextoANumeroCT = require("../middlewares/dosDatosConvertirTextoANumeroCT");

// ************* importo las rutas
routesTopics.get("/", bookTopicController.getAllBookTopic);
//routesTopics.get("/:idCapitulo/:idTema", dosDatosConvertirTextoANumeroCT, bookTopicController.getBookTopicByID);
//routesTopics.get("/:idCapitulo/:idTema", dosDatosConvertirTextoANumeroCT, bookTopicController.getBookTopicByID); /// buscar por id
//routesTopics.post("/", bookTopicController.createBookTopic); // crear una nueva seccion
//routesTopics.put("/:id", middlewareTextoNumber, bookTopicController.updateBookTopic);  // actualizar una nueva seccion
//routesTopics.delete("/:id", middlewareTextoNumber, bookTopicController.deleteBookTopic);  //borrar una seccion (ver que este vacia)


//routesChapter.get("/:idCapitulo/:idTema", middlewareDosDatosTextoNumber, bookChapterController.getBookChapterByID); /// buscar por id
//routesChapter.post("/", bookChapterController.createBookChapter); //crear capitulo
//routesChapter.put("/:idSeccion/:idCapitulo", middlewareDosDatosTextoNumber, bookChapterController.updateBookChapter);  // actualizar un capitulo
//routesChapter.delete("/:idSeccion/:idCapitulo", middlewareDosDatosTextoNumber, bookChapterController.deleteBookChapter);  //borrar una capitulo (ver que este vacia)

module.exports = routesTopics;
