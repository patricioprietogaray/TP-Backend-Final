const bookTopicSchema = require("../models/book_topic_Schema");

const getAllBookTopic = async (req, res) => {
    try {
        const allBookTopic = await bookTopicSchema.find();
        //console.log(allBookTopic.length);
        //book_chapter es la coleccion de mongodb
        res.status(200).json({ book_topics: allBookTopic, msg: "Ok" });
    } catch (error) {
        res.status(500), json({ book_topics: [], msg: "Error en el servidor" });
    }
}

const getBookTopicByID = async (req, res) => {
    try {
        const idCapitulo = req.params.idCapitulo;
        const idTema = req.params.idTema;
        let datos;
        let mostrar = false;

        const encontrarTodosLosTemas = await bookTopicSchema.find(
            {id_chapter: idCapitulo}
        );
        
        for (const tema of encontrarTodosLosTemas) {
            console.log("temas: "+tema.id_topic);
        }

        res.status(200).json({book_topics: encontrarTodosLosTemas, msg: "buscarCapitulo: " + buscarCapitulo });

        //res.status(200).json({ msg: "buscarCapitulo: " + buscarCapitulo });

    } catch (error) {
        res.status(500).json({msg: "Error en el servidor - Sin conexión!"})
    }

    // try {
    //     const idCapitulo = req.params.idCapitulo;
    //     const idTema = req.params.idTema;
    //     let datos;
    //     let mostrar = false;

    //     //uso find porque necesito que devuelva todos las secciones de la coleccion
    //     const encontrarTodosLosTemas = await bookTopicSchema.find(
    //         {id_chapter: idCapitulo}
    //     );
        
    //     console.log(encontrarTodosLosTemas);
        
    //     //no uso map porque es sincrono
    //     // uso for porque es asincrono
    //     for (const tema of encontrarTodasLosTemas) {
            
    //         console.log("una vuelta.. " + tema.id_chapter);
    //         if (idCapitulo === tema.id_chapter) {
    //             //console.log("Encontrado " + idCapitulo);
    //             mostrar = true;
    //             datos = tema;
    //             break;
    //         }
    //     }

    //     if (mostrar === true) {
    //         //console.log("mostrar es verdadero")
    //         res.status(200).json({ msg: `Se encontró el id del tema ${idTema}, id del capítulo ${idCapitulo}. Los datos son los siguientes: ${datos}` });
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

        const encontrarTodasLosTemas = await bookTopicSchema.find(
            {id_section: idSeccionNueva}
        );
        
        for (const elem of encontrarTodasLosTemas) {
            if (elem.id_chapter === idCapituloNuevo) {
                crear = false;
                break;
            }
        }

        if (crear === true) {
            const createChapter = await bookTopicSchema.create(req.body);
            res.status(200).json({ createChapter, msg: "Tarea agregada exitosamente!" });
        }


    } catch (error) {
        res.status(500).json({ msg: `Error al crear la nueva seccion - ${error.message}` });
    }
};

const updateBookChapter = async (req, res) => {
    try {
        const idSeccion = req.params.idSeccion;
        const idCapitulo = req.params.idCapitulo;
        const titulo = req.params.title_chapter;
        let datos;
        let editar = false;

        //uso find porque necesito que devuelva todos las secciones de la coleccion
        const encontrarTodasLosTemas = await bookTopicSchema.find(
            { id_section: idSeccion }
        );

        //no uso map porque es sincrono
        // uso for porque es asincrono
        for (const tema of encontrarTodasLosTemas) {
            
            console.log("una vuelta.. " + tema.id_chapter);
            if (idCapitulo === tema.id_chapter) {
                //console.log("Encontrado " + idCapitulo);
                editar = true;
                datos = tema;
                break;
            }
        }

        if (editar === true) {
            console.log("mostrar es verdadero")
            const filter = { id_section: idSeccion, id_chapter: idCapitulo };
            const update = req.body;
                //{ $set: { title_chapter: titulo } };

            //actualizar el atributo titulo
            //res.status(200).json({ msg: `Se encontró el id del capitulo ${idCapitulo}, id de sección ${idSeccion}. Los datos son los siguientes: ${datos}` });
            const doc = await bookTopicSchema.findOneAndUpdate(filter, update, {
                new: true
            });
            //console.log("Luego de la actualizacion: "+doc.id_section+", "+doc.id_chapter+", "+doc.title_chapter)
            res.status(200).json({ msg: `Se encontró el id del capitulo ${idCapitulo}, id de sección ${idSeccion}. Los datos son los siguientes: ${datos}` });
        }

    } catch (error) {
        res.status(500).json({ msg: `Error al actualizar una sección - ${error.message}` });
    }
    
    // try {
    //     const buscarID = req.params.id;
    //     //si es caracter el id_sectoon (que es caracter)
    //     const seccionEncontrada = await bookTopicSchema.find(
    //         { id_chapter: { $regex: new RegExp(buscarID, 'i') } }
    //     );
    //     if (seccionEncontrada) {
    //         const actualizarCapitulo = await bookTopicSchema.findByIdAndUpdate(
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
    try{
       const idSeccion = req.params.idSeccion;
        const idCapitulo = req.params.idCapitulo;
        const titulo = req.params.title_chapter;
        let datos;
        let borrar = false;

        //uso find porque necesito que devuelva todos las secciones de la coleccion
        const encontrarTodasLosTemas = await bookTopicSchema.find(
            { id_section: idSeccion }
        );

        //no uso map porque es sincrono
        // uso for porque es asincrono
        for (const tema of encontrarTodasLosTemas) {
            
            //console.log("una vuelta.. " + tema.id_chapter);
            if (idCapitulo === tema.id_chapter) {
                //console.log("Encontrado " + idCapitulo);
                borrar = true;
                datos = tema;
                break;
            }
        }

        if (borrar === true) {
            //console.log("mostrar es verdadero")
            const filter = { id_section: idSeccion, id_chapter: idCapitulo };
            const update = req.body;
                //{ $set: { title_chapter: titulo } };

            //actualizar el atributo titulo
            //res.status(200).json({ msg: `Se encontró el id del capitulo ${idCapitulo}, id de sección ${idSeccion}. Los datos son los siguientes: ${datos}` });
            const doc = await bookTopicSchema.findOneAndDelete(filter, update, {
                new: true
            });
            //console.log("Luego de la actualizacion: "+doc.id_section+", "+doc.id_chapter+", "+doc.title_chapter)
            res.status(200).json({ msg: `Se encontró el id del capitulo ${idCapitulo}, id de sección ${idSeccion}. Los datos son los siguientes: ${datos}` });
        }

    } catch (error) {
        res.status(500).json({ msg: `Error al borrar un capítulo - ${error.message}` });
    }
}

module.exports = { getAllBookTopic, getBookTopicByID, createBookChapter, updateBookChapter, deleteBookChapter };