const express = require("express");
const app = express();
app.use(express.json());

// *********** Functions

// *********** Routes
const bookSectionsRouter = require("./routers/book_sections_router");
const bookChapterRouter = require("./routers/book_chapter_router");
const bookTopicRouter = require("./routers/book_topic_router");
const userRouter = require("./routers/user_router");
const provinciasRouter = require("./routers/provinces_router");
// acceso desde http /book
app.use("/book/sections", bookSectionsRouter);
app.use("/book/chapters", bookChapterRouter);
app.use("/book/topics", bookTopicRouter);
app.use("/users", userRouter);
app.use("/provincias", provinciasRouter);

// *********** Middleware

// *********** General Route

// *********** Database Connection
const connectionDB = require("./database/conectiondb");
connectionDB();
// ***********
module.exports = app;