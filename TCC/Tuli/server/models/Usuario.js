import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    email: {type: String, required: true},
    tel: {type: String, required: true}
})

const Usuario = mongoose.model('usuarios', usuarioSchema)

export default Usuario