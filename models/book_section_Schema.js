//const { timeStamp } = require("console");
const mongoose = require("mongoose");
// const { type } = require("os");
// const { type } = require("os");  // surge con type en los atributos   ????
const Schema = mongoose.Schema; // sin parentesis

const book_section_schema_const = new Schema(
    {
        //atributo debe coincidir con MongoDB
        id_section: { type: Number },
        title_section: { type: String }
    }, { timeStamp: true }
    
);

//book_section es la coleccion de datos de mongodb, ojo que si pones "verdurita" se crea una
//coleccion llamada verdurita en mongodb
const bookSection = mongoose.model("book_sections", book_section_schema_const);
module.exports = bookSection;