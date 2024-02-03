const bookChapterSchema = require("../models/book_chapter_Schema");

const getAllBookChapter = async (req, res) => {
    try {
        const allBookChapter = await bookChapterSchema.find();
        //console.log(allBookChapter.length);
        //book_chapter es la coleccion de mongodb
        res.status(200).json({ book_chapters: allBookChapter, msg: "Ok" });
    } catch (error) {
        res.status(500), json({ book_chapters: [], msg: "Error en el servidor" });
    }
}

const getBookChapterByID = async (req, res) => {
    try {
        const idSeccion = req.params.idSeccion;
        const idCapitulo = req.params.idCapitulo;
        let datos;
        let mostrar = false;

        //uso find porque necesito que devuelva todos las secciones de la coleccion
        const encontrarTodasLasSecciones = await bookChapterSchema.find(
            { id_section: idSeccion }
        );

        console.log(encontrarTodasLasSecciones);
        
        //no uso map porque es sincrono
        // uso for porque es asincrono
        for (const capi of encontrarTodasLasSecciones) {
            
            console.log("una vuelta.. " + capi.id_chapter);
            if (idCapitulo === capi.id_chapter) {
                console.log("Encontrado " + idCapitulo);
                mostrar = true;
                datos = capi;
                break;
            }
        }

        if (mostrar === true) {
            console.log("mostrar es verdadero")
            res.status(200).json({ msg: `Se encontró el id del capitulo ${idCapitulo}, id de sección ${idSeccion}. Los datos son los siguientes: ${datos}` });
        }

    } catch (e) {
        res.status(500).json({ msg: "Error interno del servidor!" });
    }







    

    
    // const buscarID = req.params.id;
    // try {
    //     //const seccionEncontrada = await bookSectionSchema.findById(buscarID); - si es numero
        
    //     //si es caracter el id_sectoon (que es caracter)
    //     const capituloEncontrado = await bookChapterSchema.findOne(
    //         { id_chapter: buscarID }
    //     );
    //     const { id_chapter, id_section, title_chapter } = capituloEncontrado;
    //     if (!capituloEncontrado.$isEmpty()) {
    //         //capitulo encontrado
    //         res.status(200).json({ msg: `Se encontró el id del capitulo ${id_chapter}, id de sección ${id_section}, con el titulo de ${title_chapter}.` });
    //     } else {
    //         res.status(404).json({ msg: `No se encontró el capítulo ${buscarID}.` });
    //     }
    // } catch (e) {
    //     res.status(500).json({ msg: "Error interno del servidor!" });
    // }
}

const createBookChapter = async (req, res) => {
    try {
        const idCapituloNuevo = req.body.id_chapter;
        const idSeccionNueva = req.body.id_section;
        const tituloCapitulo = req.body.title_chapter;
        let crear = true;

        const encontrarTodasLasSecciones = await bookChapterSchema.find(
            {id_section: idSeccionNueva}
        );
        
        for (const elem of encontrarTodasLasSecciones) {
            if (elem.id_chapter === idCapituloNuevo) {
                crear = false;
                break;
            }
        }

        if (crear === true) {
            const createChapter = await bookChapterSchema.create(req.body);
            res.status(200).json({ createChapter, msg: "Tarea agregada exitosamente!" });
        }


    } catch (error) {
        res.status(500).json({ msg: `Error al crear la nueva seccion - ${error.message}` });
    }
};

const updateBookChapter = async (req, res) => {
    // try {
    //     const buscarID = req.params.id;
    //     //si es caracter el id_sectoon (que es caracter)
    //     const seccionEncontrada = await bookChapterSchema.find(
    //         { id_chapter: { $regex: new RegExp(buscarID, 'i') } }
    //     );
    //     if (seccionEncontrada) {
    //         const actualizarCapitulo = await bookChapterSchema.findByIdAndUpdate(
    //         // buscar id             cuerpo a reemplazar
    //         seccionEncontrada, req.body
    //         );

    //         res.status(200).json({ msg: `Se encontró ${seccionEncontrada}` });
    //     } else {
    //         res.send(`No se encontró la sección ${json(buscarID)}`);
    //     }
        
    // } catch (error) {
    //     res.status(500).json({ msg: `Error al actualizar una sección - ${error.message}` });
    // }
}

const deleteBookChapter = async (req, res) => {
    try {
        const buscarID = req.params.id;
        //si es caracter el id_sectoon (que es caracter)
        const capituloEncontrado = await bookChapterSchema.find(
            { id_chapter: { $regex: new RegExp(buscarID, 'i') } }
        );
        if (capituloEncontrado) {
            const capituloBorrado = await bookChapterSchema.findByIdAndDelete(capituloEncontrado);
            res.status(200).json({ book_chapters: capituloBorrado, msg: "Capítulo borrado exitosamente!" });
        } else {
            res.send(`No se encontró el capítulo ${json(buscarID)}`);
        }
        
        //const borrarSeccion = await bookSectionSchema
    } catch (error) {

    }
}

module.exports = { getAllBookChapter, getBookChapterByID, createBookChapter, updateBookChapter, deleteBookChapter };