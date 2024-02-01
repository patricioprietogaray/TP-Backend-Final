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
    const buscarID = req.params.id;
    try {
        //const seccionEncontrada = await bookSectionSchema.findById(buscarID); - si es numero
        
        //si es caracter el id_sectoon (que es caracter)
        const temaEncontrado = await bookTopicSchema.find(
            { id_topic: { $regex: new RegExp(buscarID, 'i') } }
        );
        if (temaEncontrado) {
            res.status(200).json({ msg: `Se encontró ${temaEncontrado}` });
        } else {
            res.send(`No se encontró la sección ${json(buscarID)}`);
        }
    } catch (e) {
        res.send("Error al buscar la seccion: " + e.message);
        res.status(500).send("Error interno del servidor!");
    }
};

const createBookTopic = async (req, res) => {
    try {
        const createTopic = await bookTopicSchema.create(req.body);
        res.status(200).json({ createTopic, msg: "Tema agregado exitosamente!" });
    } catch (error) {
        res.status(500).json({ msg: `Error al crear el nuevo tema - ${error.message}` });
    }
};

const updateBookTopic = async (req, res) => {
    try {
        const buscarID = req.params.id;
        //si es caracter el id_sectoon (que es caracter)
        const topicEncontrado = await bookTopicSchema.find(
            { id_topic: { $regex: new RegExp(buscarID, 'i') } }
        );
        if (topicEncontrado) {
            const actualizarSeccion = await bookTopicSchema.findByIdAndUpdate(
            // buscar id             cuerpo a reemplazar
            topicEncontrado, req.body
            );

            res.status(200).json({ msg: `Se encontró ${topicEncontrado}` });
        } else {
            res.send(`No se encontró el tema ${json(buscarID)}`);
        }
        
    } catch (error) {
        res.status(500).json({ msg: `Error al actualizar un tema - ${error.message}` });
    }
}

const deleteBookTopic = async (req, res) => {
    try {
        const buscarID = req.params.id;
        //si es caracter el id_sectoon (que es caracter)
        const temaEncontrado = await bookTopicSchema.find(
            { id_topic: { $regex: new RegExp(buscarID, 'i') } }
        );
        if (temaEncontrado) {
            const seccionBorrada = await bookTopicSchema.findByIdAndDelete(temaEncontrado);
            res.status(200).json({ book_topics: seccionBorrada, msg: "Sección borrada exitosamente!" });
        } else {
            res.send(`No se encontró la sección ${json(buscarID)}`);
        }
        
        //const borrarSeccion = await bookSectionSchema
    } catch (error) {

    }
}


module.exports = { getAllBookTopic, getBookTopicByID, createBookTopic, updateBookTopic, deleteBookTopic };