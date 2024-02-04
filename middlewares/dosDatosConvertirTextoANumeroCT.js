// la funcion se debe llamar igual que el archivo

const dosDatosConvertirTextoANumeroCT = (req, res, next) => {
    
    // texto
    const idCapitulo = req.params.idCapitulo;
    const idTema = req.params.idTema;
    
    
    console.log(`Hola desde el middleware : id de la capitulo ${idCapitulo}, id del tema ${idTema}.`);
    
    //el req.params.... es un string
    // y lo sobrescribo por formato numerico
    req.params.idTema = Number(idTema);
    req.params.idCapitulo = Number(idCapitulo);

    //sigo al controlador
    next();
}

module.exports = dosDatosConvertirTextoANumeroCT;