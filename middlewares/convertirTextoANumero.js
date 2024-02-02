// la funcion se debe llamar igual que el archivo

const convertirTextoANumero = (req, res, next) => {
    
    // texto
    const idAfiltrar = req.params.id;
    //console.log("Hola desde el middleware :" + idAfiltrar);
    
    //el req.params.id es un string
    // y lo sobrescribo por formato numerico
    req.params.id = Number(idAfiltrar);

    //sigo al controlador
    next();
}

module.exports = convertirTextoANumero;