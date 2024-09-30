import express from 'express';
import conectaNaDB from './db.js';
import cors from 'cors';
import cadastros from './models/Cadastro.js';

const app = express();
app.use(cors());
const conexao = await conectaNaDB();

conexao.on('error', (erro) => { 
    console.error('Erro ao conectar no MongoDB', erro);
});

conexao.once('open', () => {
    console.log('Conectado ao MongoDB')
})

app.get('/cadastros', async (req, res) =>{
    const listaCadastros = await cadastros.find({});
    res.status(200).json(listaCadastros);
})

app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000')
})