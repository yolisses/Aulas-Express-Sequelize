//Testar a conexão com o sequelize
// const sequelize = require('./database/db');
// async function testar(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }
// testar();

//Sincronizar o banco de dados
// const pessoa = require('./models/Pessoa');
// async function sincronizar(){
//   await pessoa.sync();
//   console.log('Sincronizado');
// }
// sincronizar();

//Salvar uma pessoa
// const pessoa = require('./models/Pessoa');
// async function salvar(){
//   const paulo = pessoa.build({
//     nome: "Paulo",
//     email: "paulo@gmail.com"
//   });
//   await paulo.save();
// }
// salvar();

const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.API_PORT

app.get('/pessoas', (req, res) => {
  res.send('Listar pessoas')
})

app.get('/pessoas/:id', (req, res) => {
  res.send('Buscar pessoas')
})

app.post('/pessoas', (req, res) => {
  res.send('Salvar pessoas')
})

app.delete('/pessoas/:id', (req, res) => {
  res.send('Deletar pessoas')
})

app.put('/pessoas/:id', (req, res) => {
  res.send('Atualizar pessoas')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})