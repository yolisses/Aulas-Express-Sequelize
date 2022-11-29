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

// Sincronizar o banco de dados
// const person = require('./models/Person');
// async function sincronizar(){
//   await person.sync();
//   console.log('Sincronizado');
// }
// sincronizar();

//Salvar uma person
// const person = require('./models/Person');
// async function salvar(){
//   const paulo = person.build({
//     nome: "Paulo",
//     email: "paulo@gmail.com"
//   });
//   await paulo.save();
// }
// salvar();

const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const port = process.env.API_PORT;
const personController = require("./controllers/PersonController");

//Rotas para a entidade person
app.get("/persons", personController.listarPersons);
app.get("/persons/:id", personController.buscarPerson);
app.post("/persons", personController.salvarPerson);
app.delete("/persons/:id", personController.deletarPerson);
app.put("/persons/:id", personController.atualizarPerson);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
