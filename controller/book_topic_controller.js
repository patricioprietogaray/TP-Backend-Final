const bookTopicSchema = require("../models/book_topic_Schema");

const getAllBookTopic = async (req, res) => {
    try {
        const allBookTopic = await bookTopicSchema.find();
        console.log(allBookTopic.length);
        //book_chapter es la coleccion de mongodb
        res.status(200).json({ book_topics: allBookTopic, msg: "Ok" });
    } catch (error) {
        res.status(500), json({ book_topics: [], msg: "Error en el servidor" });
    }
}

module.exports = { getAllBookTopic };