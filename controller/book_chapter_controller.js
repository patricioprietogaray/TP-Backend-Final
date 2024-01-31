const bookChapterSchema = require("../models/book_chapter_Schema");

const getAllBookChapter = async (req, res) => {
    try {
        const allBookChapter = await bookChapterSchema.find();
        console.log(allBookChapter.length);
        //book_chapter es la coleccion de mongodb
        res.status(200).json({ book_chapters: allBookChapter, msg: "Ok" });
    } catch (error) {
        res.status(500), json({ book_chapters: [], msg: "Error en el servidor" });
    }
}

const getBookChapterByID = async (req, res) => {
    const buscarID = req.params.id;
    try {
        //const seccionEncontrada = await bookSectionSchema.findById(buscarID); - si es numero
        
        //si es caracter el id_sectoon (que es caracter)
        const capituloEncontrado = await bookChapterSchema.find(
            { id_chapter: { $regex: new RegExp(buscarID, 'i') } }
        );
        if (capituloEncontrado) {
            res.status(200).json({ msg: `Se encontró ${capituloEncontrado}` });
        } else {
            res.send(`No se encontró el capítulo ${json(buscarID)}`);
        }
    } catch (e) {
        res.send("Error al buscar el capítulo: " + e.message);
        res.status(500).send("Error interno del servidor!");
    }
}

const createBookChapter = async (req, res) => {
    try {
        const createChapter = await bookChapterSchema.create(req.body);
        res.status(200).json({ createChapter, msg: "Tarea agregada exitosamente!" });
    } catch (error) {
        res.status(500).json({ msg: `Error al crear la nueva seccion - ${error.message}` });
    }
};

const updateBookChapter = async (req, res) => {
    try {
        const buscarID = req.params.id;
        //si es caracter el id_sectoon (que es caracter)
        const seccionEncontrada = await bookChapterSchema.find(
            { id_chapter: { $regex: new RegExp(buscarID, 'i') } }
        );
        if (seccionEncontrada) {
            const actualizarCapitulo = await bookChapterSchema.findByIdAndUpdate(
            // buscar id             cuerpo a reemplazar
            seccionEncontrada, req.body
            );

            res.status(200).json({ msg: `Se encontró ${seccionEncontrada}` });
        } else {
            res.send(`No se encontró la sección ${json(buscarID)}`);
        }
        
    } catch (error) {
        res.status(500).json({ msg: `Error al actualizar una sección - ${error.message}` });
    }
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