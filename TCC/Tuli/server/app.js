import express from 'express';
import conectaNaDb from './db.js';
import cors from 'cors';
import usuario from './models/usuario.js';

const app = express();
app.use(cors());
const conexao = await conectaNaDb();

conexao.on('error',(erro) => {
    console.log('Erro ao conectar no MongoDB', erro)
})

conexao.once('open', () => {
    console.log('Conectado ao MongoDB')
})

app.get('/usuarios', async (req, res) => {
    const listaUsuarios = await usuario.find({});
    res.status(200).json(listaUsuarios)
})

app.listen(3000, () => {
    console.log('Servidor conectado')
})