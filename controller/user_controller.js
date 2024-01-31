const userSchema = require("../models/user_Schema");
const bcrypt = require("bcrypt");

const getAllUser = async (req, res) => {
    try {
        const allUser = await userSchema.find();
        console.log(allUser.length);
        //users es la coleccion de mongodb
        res.status(200).json({ users: allUser, msg: "Ok" });
    } catch (error) {
        res.status(500), json({ users: [], msg: "Error en el servidor" });
    }
};

const createUser = async (req, res) => {
    
    
    
    //try {

        // ***************** Encripto la constaseña + rouds + security
        //const saltRounds = 10;
        //console.log("saltRounds"+saltRounds)
        //const salt = bcrypt.genSaltSync(saltRounds);
        //console.log("salt: " + salt);
        // console.log("ingreso esta frase, :" + bcrypt.hashSync("ingreso esta frase"));

        // const hashedPassword = bcrypt.hashSync(req.body.password);
        //probar entrada con body en postman
    //} catch (error) {
        
    //}
}



module.exports = { getAllUser, createUser };