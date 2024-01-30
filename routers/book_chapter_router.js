const express = require("express");
const routesChapter = express.Router();
const bookChapterController = require("../controller/book_chapter_controller");

// ************* importo las rutas
routesChapter.get("/", bookChapterController.getAllBookChapter);

module.exports = routesChapter;