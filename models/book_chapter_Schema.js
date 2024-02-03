//const { timeStamp } = require("console");
const mongoose = require("mongoose");
// const { type } = require("os");
// const { type } = require("os");  // surge con type en los atributos   ????
const Schema = mongoose.Schema; // sin parentesis

const book_chapter_schema_const = new Schema(
    {
        //atributo debe coincidir con MongoDB
        id_chapter: { type: Number },
        id_section: { type: Number },
        title_chapter: {type: String}
    }, { timeStamp: true }
    
);

//book_chapter es la coleccion de datos de mongodb, ojo que si pones "verdurita" se crea una
//coleccion llamada verdurita en mongodb


const bookChapter = mongoose.model("book_chapters", book_chapter_schema_const);











//const bookChapter = mongoose.model("book_chapter", book_chapter_schema_const);
module.exports = bookChapter;