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

module.exports = { getAllBookChapter };