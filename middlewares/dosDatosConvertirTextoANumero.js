// la funcion se debe llamar igual que el archivo

const dosDatosConvertirTextoANumero = (req, res, next) => {
    
    // texto
    const idSeccion = req.params.idSeccion;
    const idCapitulo = req.params.idCapitulo;
    
    
    //console.log(`Hola desde el middleware : id de la seccion ${idSeccion}, id del capitulo ${idCapitulo}.`);
    
    //el req.params.... es un string
    // y lo sobrescribo por formato numerico
    req.params.idSeccion = Number(idSeccion);
    req.params.idCapitulo = Number(idCapitulo);

    //sigo al controlador
    next();
}

module.exports = dosDatosConvertirTextoANumero;