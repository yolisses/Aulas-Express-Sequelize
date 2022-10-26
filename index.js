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
const pessoa = require('./models/Pessoa');

async function sincronizar(){
  await pessoa.sync();
  console.log('Sincronizado');
}

sincronizar();
