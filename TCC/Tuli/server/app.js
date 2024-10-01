import express from 'express'
import cors from 'cors'
import usuarios from './models/Usuario.js'
import conectaNaDb from './db.js';

const app = express();
app.use(cors());
const conexao = await conectaNaDb();

conexao.on('error', (erro) =>{
    console.log('Erro ao conectar no MongoDB', erro)
});

conexao.once('open', () =>{
    console.log('Conectado no MongoDB')
})

app.get('/usuarios', async (req, res) =>{
    const listaUsuarios = await usuarios.find({});
    res.status(200).json(listaUsuarios)
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});