const express = require("express");
const routesSection = express.Router();
const bookSectionController = require("../controller/book_section_controller");

// ************* importo las rutas
routesSection.get("/", bookSectionController.getAllBookSection);

module.exports = routesSection;