const { check } = require("express-validator");

const idSeccion = check("id_section")
    .notEmpty()
    .withMessage("El id de la sección es obligatorio")
    .isNumeric()
    .withMessage("El id de la sección debe ser un número")
    .isLength({ min: 1, max: 4 })
    .withMessage("El id de la sección debe ser desde 1 hasta 9.999");

const tituloSeccion = check("title_section")
    .notEmpty()
    .withMessage("El título de la sección es obligatorio")
    .isLength({ min: 1, max: 20 })
    .withMessage("El título de la sección debe ser de 1 hasta 20 caracteres")
    .isString()
    .withMessage("El título debe ser un texto valido!");

const idCapitulo = check("id_chapter")
    .notEmpty()
    .withMessage("El id del capítulo es obligatorio")
    .isNumeric()
    .withMessage("El id del capítulo debe ser un número")
    .isLength({ min: 1, max: 4 })
    .withMessage("El id del capítulo debe ser desde 1 hasta 9.999");

const tituloCapitulo = check("title_chapter")
    .notEmpty()
    .withMessage("El título de la sección es obligatorio")
    .isLength({ min: 1, max: 20 })
    .withMessage("El título de la sección debe ser de 1 hasta 20 caracteres")
    .isString()
    .withMessage("El título debe ser un texto valido!");

module.exports = { idSeccion, tituloSeccion, idCapitulo, tituloCapitulo };


//         title_section: { type: String }
//     }, { timeStamp: true }
    
// );
