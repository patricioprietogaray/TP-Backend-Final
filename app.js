const express = require("express");
const app = express();
app.use(express.json());

// *********** Functions

// *********** Routes
const bookSectionsRouter = require("./routers/book_sections_router");
// acceso desde http /book
app.use("/book", bookSectionsRouter);

// *********** Middleware

// *********** General Route

// *********** Database Connection
const connectionDB = require("./database/conectiondb");
connectionDB();
// ***********
module.exports = app;