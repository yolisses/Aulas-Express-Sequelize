import express from "express";
import { API_PORT } from "./env.js";
import { cache } from "./database/cache.js";
import { personController } from "./controllers/personController.js";

const app = express();
app.use(express.json());

app.get("/person", personController.listPersons);
app.post("/person", personController.savePerson);
app.get("/person/:id", personController.findPerson);
app.put("/person/:id", personController.updatePerson);
app.delete("/person/:id", personController.deletePerson);

async function run() {
  await cache.connect();
  app.listen(API_PORT, () => {
    console.log(`Server listening on http://localhost:${API_PORT}`);
  });
}

run();
