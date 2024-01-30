const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Conexion a Mongo exitosa.");
    } catch (error) {
        console.log(`Error al conectar a mongo ${error.message}`);
    }
    
}

module.exports = dbConnection;