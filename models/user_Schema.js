//const { timeStamp } = require("console");
const mongoose = require("mongoose");
// const { type } = require("os");
// const { type } = require("os");  // surge con type en los atributos   ????
const Schema = mongoose.Schema; // sin parentesis

const user_schema_const = new Schema(
    {
        //atributo debe coincidir con MongoDB
        id_user: { type: String },
        username: { type: String },
        password: { type: String }
    }, { timeStamp: true }
    
);

//book_chapter es la coleccion de datos de mongodb, ojo que si pones "verdurita" se crea una
//coleccion llamada verdurita en mongodb


const Users = mongoose.model("users", user_schema_const);

module.exports = Users;