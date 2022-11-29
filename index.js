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

const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const port = process.env.API_PORT;
const personController = require("./controllers/PersonController");

app.get("/person", personController.listPersons);
app.post("/person", personController.savePerson);
app.get("/person/:id", personController.findPerson);
app.put("/person/:id", personController.updatePerson);
app.delete("/person/:id", personController.deletePerson);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
