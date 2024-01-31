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


module.exports = { getAllBookChapter, getBookChapterByID };