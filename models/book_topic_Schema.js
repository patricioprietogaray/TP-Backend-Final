//const { timeStamp } = require("console");
const mongoose = require("mongoose");
// const { type } = require("os");
// const { type } = require("os");  // surge con type en los atributos   ????
const Schema = mongoose.Schema; // sin parentesis

const book_topic_schema_const = new Schema(
    {
        //atributo debe coincidir con MongoDB
        id_topic: { type: String },
        id_chapter: {type: String},
        title_topic: { type: String }
    }, { timeStamp: true }
    
);

//book_section es la coleccion de datos de mongodb, ojo que si pones "verdurita" se crea una
//coleccion llamada verdurita en mongodb
const bookTopics = mongoose.model("book_topics", book_topic_schema_const);
module.exports = bookTopics;