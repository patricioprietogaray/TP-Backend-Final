const userSchema = require("../models/user_Schema");
const bcrypt = require("bcrypt");

const getAllUser = async (req, res) => {
    try {
        const allUser = await userSchema.find();
        res.status(200).json({ users: allUser, msg: "Ok" });
    } catch (error) {
        res.status(500).json({ users: [], msg: "Error en el servidor" });
    }
}

const getUserByID = async (req, res) => {
    const buscarID = req.params.id;
    try {
        //const seccionEncontrada = await bookSectionSchema.findById(buscarID); - si es numero
        
        //si es caracter el id_sectoon (que es caracter)
        const usuarioEncontrado = await userSchema.find(
            { id_user: { $regex: new RegExp(buscarID, 'i') } }
        );
        if (usuarioEncontrado.length > 0) {
            res.status(200).json({ msg: `Se encontró ${usuarioEncontrado}` });
            //console.log("Cant usuarios encontrados: " + usuarioEncontrado);
        } else {
            // JSON.stringify convierto un objeto (buscarID) a texto plano json
            res.send(`No se encontró el usuario ${JSON.stringify(buscarID)}`);
        }
    } catch (e) {
        res.send("Error al buscar el usuario: " + e.message);
        res.status(500).send("Error interno del servidor!");
    }
};

const createUser = async (req, res) => {
    try {

        //desestructuro el atributo password del body recibido
        const { password } = req.body;
        //llamo a la funcion generador y le paso como parámetro el password
        const jash = await hashGenerator(password);

        //del body recibido reemplazo la password por el hash
        const newUser = { ...req.body, password: jash };
        // luego cargo los datos a la coleccion
        const createUser = await userSchema.create(newUser);

        //req.body.password = jash;
        
        res.status(200).json({ createUser, msg: "Usuario agregado exitosamente!" });
    } catch (error) {
        res.status(500).json({ msg: `Error al crear el nuevo usuario - ${error.message}` });
    }
};

// ******************* generar un hash con la contraseña recibida y mostrar su resultado
// guardar el resultado en mongoDB

const hashGenerator = (passwordWriteFromUser) => {
    console.log("el password ingresado por el usuario es: " + passwordWriteFromUser);

    //cantidad de rondas para que la constraseña sea segura (como mínimo)
    const rondas = 10;

    // utilizare una promesa porque necesito retornar el codigo generado, 
    // y esto tardará tiempo.....
    return new Promise((resolve, reject) => {
        bcrypt.hash(passwordWriteFromUser, rondas)
            .then(hash => {
                console.log(`el password hasheado es: ${hash}`);
                resolve(hash); // en vez de generado = hash;
            })
            .catch(error => {
                console.error(`Error al generar el hash: ${error}`);
                reject(error);
            });
    });
}

// ******************* desencriptar la contraseña obtenida desde mongodb
// ********** NO SE PUEDE DESENCRIPTAR UNA CONTRASEÑA SOLO SE INGRESA EL DATO, SE ENCRIPTA Y SE COMPARA!


// usuario: admin    clave:admin
const loginUser = async (req, res) => {
    try {
        // cargar los datos desde la uri
        const usuarioParams = req.params.nombreusuario;
        const claveParams = req.params.clave;

        //buscar el usuario en la base de datos
        const logueaUsuario = await userSchema.findOne({ username: usuarioParams });
        console.log("ver variable loguea: " + logueaUsuario);
        if (logueaUsuario) {
            // verificar clave usando bcrypt
                                                //req.params    contenido BD
            const coincide = await bcrypt.compare(claveParams, logueaUsuario.password);

            if (coincide) {
                console.log("bienvenido: " + usuarioParams);
                res.status(200).json({ users: logueaUsuario, msg: "Usuario logueado correctamente!" });
            }
         } else {
            console.log("Ha ingresado una clave inválida");
            res.status(401).json({ msg: "Contraseña inválida, para ingresar pruebe de nuevo!" });
        }
    } catch (error) {
        console.log(`Usuario inexistente: ${error.message}`);
        res.status(500).json({ msg: "Error en el Servidor." });
    }
}

const updateUser = async (req, res) => {
    try {
        const buscarID = req.params.id;
        //si es caracter el id_sectoon (que es caracter)
        const userEncontrado = await userSchema.find(
            { id_user: { $regex: new RegExp(buscarID, 'i') } }
        );
        if (userEncontrado) {
            const actualizarSeccion = await userSchema.findByIdAndUpdate(
            // buscar id             cuerpo a reemplazar
            userEncontrado, req.body
            );

            res.status(200).json({ msg: `Se encontró ${userEncontrado}` });
        } else {
            res.send(`No se encontró el usuario ${JSON.stringify(buscarID)}`);
        }
        
    } catch (error) {
        res.status(500).json({ msg: `Error al actualizar un tema - ${error.message}` });
    }
}

const deleteUser = async (req, res) => {
    try {
        const buscarID = req.params.id;
        //si es caracter el id_sectoon (que es caracter)
        const usuarioEncontrado = await userSchema.find(
            { id_user: { $regex: new RegExp(buscarID, 'i') } }
        );
        if (usuarioEncontrado) {
            const seccionBorrada = await userSchema.findByIdAndDelete(usuarioEncontrado);
            res.status(200).json({ users: seccionBorrada, msg: "Sección borrada exitosamente!" });
        } else {
            res.send(`No se encontró la sección ${json(buscarID)}`);
        }
        
        //const borrarSeccion = await bookSectionSchema
    } catch (error) {

    }
}

module.exports = { getAllUser, getUserByID, createUser, updateUser, deleteUser, loginUser };
