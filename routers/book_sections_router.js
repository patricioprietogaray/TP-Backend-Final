const express = require("express");
const routes = express.Router();
const bookSectionController = require("../controller/book_section_controller");

// ************* importo las rutas
routes.get("/sections", bookSectionController.getAllBookSection);

module.exports = routes;