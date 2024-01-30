const express = require("express");
const routesTopics = express.Router();
const bookTopicController = require("../controller/book_topic_controller");

// ************* importo las rutas
routesTopics.get("/", bookTopicController.getAllBookTopic);

module.exports = routesTopics;