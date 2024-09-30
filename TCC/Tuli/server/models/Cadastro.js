import mongoose from "mongoose";

const CadastroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    email: {type: String, required: true},
    tel: {type: Number, required: true}
});

const cadastros = mongoose.model('cadastro', CadastroSchema);

export default cadastros;