const express = require("express");
const routesTopics = express.Router();
const bookTopicController = require("../controller/book_topic_controller");
//const middlewareTextoNumber = require("../middlewares/convertirTextoANumero");

// ************* importo las rutas
routesTopics.get("/", bookTopicController.getAllBookTopic);
//routesTopics.get("/:id", middlewareTextoNumber, bookTopicController.getBookTopicByID); /// buscar por id
routesTopics.post("/", bookTopicController.createBookTopic); // crear una nueva seccion
//routesTopics.put("/:id", middlewareTextoNumber, bookTopicController.updateBookTopic);  // actualizar una nueva seccion
//routesTopics.delete("/:id", middlewareTextoNumber, bookTopicController.deleteBookTopic);  //borrar una seccion (ver que este vacia)

module.exports = routesTopics;
