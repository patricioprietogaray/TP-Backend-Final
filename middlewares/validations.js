// validaciones en general sera el comportamiento que tiene al 
// manejar los errores de ingreso de datos


// el archivo y la funcion tienen el mismo nombre
const { body, validationResult } = require('express-validator');

const validations = (req, res, next) => {
    const errores = validationResult(req);  //traigo la lista de errores

    if (errores.isEmpty()) {
        return next();        // se usa return para retornar una accion
    } else {
        const listaErrores = [];
        errores.array().map(error => listaErrores.push({ [error.type]: error.msg + " - El texto ingresado: " + error.value }));
        //devuelve un error 400
        res.status(400).json({ errores: listaErrores, msg: "Error de validación." });
    }
}

module.exports = { validations, body }  // exporto la funcion y el body
