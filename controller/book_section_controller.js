const { isString } = require("util");
const bookSectionSchema = require("../models/book_section_Schema");

const getAllBookSection = async (req, res) => {
    try {
        const allBookSection = await bookSectionSchema.find();
        // console.log(allBookSection.length);
        //book_sections es la coleccion de mongodb
        res.status(200).json({ book_sections: allBookSection, msg: "Ok" });
    } catch (error) {
        res.status(500),json({book_sections: [], msg: "Error en el servidor"})
    }
}

const getBookSectionByID = async (req, res) => {
    const buscarID = req.params.id;
    try {
        //const seccionEncontrada = await bookSectionSchema.findById(buscarID); - si es numero
        
        //si es caracter el id_sectoon (que es caracter)
        const seccionEncontrada = await bookSectionSchema.find(
            { id_section: { $regex: new RegExp(buscarID, 'i') } }
        );
        if (seccionEncontrada) {
            res.status(200).json({ msg: `Se encontró ${seccionEncontrada}` });
        } else {
            res.send(`No se encontró la sección ${json(buscarID)}`);
        }
    } catch (e) {
        res.send("Error al buscar la seccion: " + e.message);
        res.status(500).send("Error interno del servidor!");
    }
};

const createBookSection = async (req, res) => {
    try {
        const createSection = await bookSectionSchema.create(req.body);
        res.status(200).json({ createSection, msg: "Tarea agregada exitosamente!" });
    } catch (error) {
        res.status(500).json({ msg: `Error al crear la nueva seccion - ${error.message}` });
    }
};

const updateBookSection = async (req, res) => {
    try {
        const buscarID = req.params.id;
        //si es caracter el id_sectoon (que es caracter)
        const seccionEncontrada = await bookSectionSchema.find(
            { id_section: { $regex: new RegExp(buscarID, 'i') } }
        );
        if (seccionEncontrada) {
            const actualizarSeccion = await bookSectionSchema.findByIdAndUpdate(
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

const deleteBookSection = async (req, res) => {
    try {
        const buscarID = req.params.id;
        //si es caracter el id_sectoon (que es caracter)
        const seccionEncontrada = await bookSectionSchema.find(
            { id_section: { $regex: new RegExp(buscarID, 'i') } }
        );
        if (seccionEncontrada) {
            const seccionBorrada = await bookSectionSchema.findByIdAndDelete(seccionEncontrada);
            res.status(200).json({ book_sections: seccionBorrada, msg: "Sección borrada exitosamente!" });
        } else {
            res.send(`No se encontró la sección ${json(buscarID)}`);
        }
        
        //const borrarSeccion = await bookSectionSchema
    } catch (error) {

    }
}

module.exports = { getAllBookSection, getBookSectionByID, createBookSection, updateBookSection, deleteBookSection };