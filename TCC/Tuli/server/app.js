import express from 'express';
import conectaNaDb from './db.js';
import cors from 'cors';
import Usuario from './models/Usuario.js'

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const conexao = await conectaNaDb();

conexao.on('error',(erro) => {
    console.log('Erro ao conectar no MongoDB', erro)
})

conexao.once('open', () => {
    console.log('Conectado ao MongoDB')
})

app.get('/usuarios', async (req, res) => {
    const listaUsuarios = await Usuario.find({});
    res.status(200).json(listaUsuarios)
})

app.get('/usuarios', async(req, res) => {
    res.sendFile(__dirname + "/Tuli/src/Componentes/Cadastro/Formulario-Cadastro.jsx");
})

app.post('/usuarios', async(req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const tel = req.body.tel

    console.log("Dados recebidos:", {name, email, tel});

    const usuario = new Usuario({
        name: name,
        email: email,
        tel: tel
    })
    try{
        const newUsuario = await usuario.save();
        res.json({error: null, msg: "Cadastro Ok", usuarioId: newUsuario._id});
    } catch(error){
        res.status(400).json({error});
    }
})

app.listen(3000, () => {
    console.log('Servidor conectado')
})