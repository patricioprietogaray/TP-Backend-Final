//const { isString } = require("util");
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
        const seccionEncontrada = await bookSectionSchema.findOne(
            //{ id_section: { $regex: new RegExp(buscarID, 'i') } }
            { id_section: buscarID }
        );
        
        const { title_section, id_section } = seccionEncontrada;
        
        //if (seccionEncontrada && seccionEncontrada.length > 0) {
        if (!seccionEncontrada.$isEmpty()) {
            //const { title_section, id_section } = seccionEncontrada;
            console.log("seccionEncontrada tiene uno o mas elementos");
            res.status(200).json({ msg: `Se encontró el id: ${id_section} - cuyo titulo es ${title_section}` });
        } else {
            res.status(404).json({ msg: `No se encontró la sección ${buscarID}` });
        }
    } catch (e) {
        res.status(500).json({  msg: "Error al buscar la seccion: " + e.message });
    }
};

const createBookSection = async (req, res) => {

    try {
        const idNuevo = req.body.id_section;
        const encontrarIdNuevo = await bookSectionSchema.findOne(
            { id_section: idNuevo }
        );
        
        if (encontrarIdNuevo === null) {
            //si no existe el id_section crear uno nuevo
            const createSection = await bookSectionSchema.create(req.body);
            res.status(200).json({ createSection, msg: "Sección agregada exitosamente!" });
        } else {
            res.status(200).json({ msg: "La sección existe!" });
        }        
    } catch (error) {
         res.status(500).json({ msg: `Server Error! Problemas al crear la nueva seccion - ${error.message}` });
    }
    

};

const updateBookSection = async (req, res) => {
    try {
        const buscarID = req.params.id;
        //si es caracter el id_sectoon (que es caracter)
        const seccionEncontrada = await bookSectionSchema.findOne(
            { id_section: buscarID }
        );
        if (!seccionEncontrada.$isEmpty()) {
            const actualizarSeccion = await bookSectionSchema.findByIdAndUpdate(
            // buscar id             cuerpo a reemplazar
            seccionEncontrada, req.body
            );

            res.status(200).json({ msg: `Se encontró ${seccionEncontrada}` });
        } else {
            res.send(`No se encontró la sección ${json(buscarID)}`);
        }
        
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar una sección: "+ error.message });
    }
}

const deleteBookSection = async (req, res) => {
    try {
        const buscarID = req.params.id;
        //si es caracter el id_sectoon (que es caracter)
        const seccionEncontrada = await bookSectionSchema.findOne(
            { id_section: buscarID }
        );
        if (!seccionEncontrada.$isEmpty()) {
            const seccionBorrada = await bookSectionSchema.findByIdAndDelete(seccionEncontrada);
            res.status(200).json({ book_sections: seccionBorrada, msg: "Sección borrada exitosamente!" });
        } else {
            res.status(500).json({ msg: `No se encontró la sección ${buscarID}` });
        }
        
        //const borrarSeccion = await bookSectionSchema
    } catch (error) {
        res.status(500).json({ msg: "Error al borrar la sección "+ error.message });
    }
}

module.exports = { getAllBookSection, getBookSectionByID, createBookSection, updateBookSection, deleteBookSection };