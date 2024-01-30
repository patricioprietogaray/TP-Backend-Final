const bookSectionSchema = require("../models/book_section_Schema");

const getAllBookSection = async (req, res) => {
    try {
        const allBookSection = await bookSectionSchema.find();
        console.log(allBookSection.length);
        //book_sections es la coleccion de mongodb
        res.status(200).json({ book_sections: allBookSection, msg: "Ok" });
    } catch (error) {
        res.status(500),json({book_sections: [], msg: "Error en el servidor"})
    }
}

module.exports = { getAllBookSection };