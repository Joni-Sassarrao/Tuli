import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    tel: {type: Number, required: true}
},);

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;