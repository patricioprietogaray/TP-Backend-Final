const axios = require("axios");

const provincias = async (_, res) => {
    try {
        const response = await axios("https://apis.datos.gob.ar/georef/api/provincias");
        const data = response.data;

        // solo se muestra un listado de las provincias de la Argentina
        for (const item of data.provincias) {
            console.log("id: " + item.id + " - provinicia de "+item.nombre);
        }

        res.status(200).json({ msg: "ok" });
    } catch (error) {
        console.error("Error al hacer la solicitud a la API:", error.message);
        res.status(500).json({ msg: "Error en la conexión con el servidor de argentina.gob.ar" });
    }
}
module.exports = { provincias };