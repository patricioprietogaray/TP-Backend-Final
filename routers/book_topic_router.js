const express = require("express");
const routesTopics = express.Router();
const bookTopicController = require("../controller/book_topic_controller");

// ************* importo las rutas
routesTopics.get("/", bookTopicController.getAllBookTopic);
routesTopics.get("/:id", bookTopicController.getBookTopicByID); /// buscar por id
routesTopics.post("/", bookTopicController.createBookTopic); // crear una nueva seccion
routesTopics.put("/:id", bookTopicController.updateBookTopic);  // actualizar una nueva seccion
routesTopics.delete("/:id", bookTopicController.deleteBookTopic);  //borrar una seccion (ver que este vacia)

module.exports = routesTopics;
