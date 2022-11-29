import { cache } from "../database/cache.js";
import { Person } from "../models/person.js";

async function savePerson(req, res) {
  try {
    const person = Person.build(req.body);
    await person.save();
    res.status(201).send("User created");
  } catch {
    res.status(400).send("Error on save");
  }
}

async function listPersons(req, res) {
  const persons = await Person.findAll();
  res.status(200).send(persons);
}

async function findPerson(req, res) {
  const { id } = req.params;
  const key = "person" + id;
  let person = JSON.parse(await cache.get(key));
  if (!person) {
    person = await Person.findByPk(id);
    if (person) {
      const oneHour = 3600;
      cache.set(key, JSON.stringify(person), { EX: oneHour });
    }
  }
  if (person) res.status(200).send(person);
  else res.status(404).send("User not found");
}

async function deletePerson(req, res) {
  const { id } = req.params;
  const person = await Person.findByPk(id);
  if (person === null) {
    res.status(404).send("User not found");
  } else {
    await person.destroy();
    res.status(200).send("Successfully deleted");
    cache.del("person" + id);
  }
}

async function updatePerson(req, res) {
  const { id } = req.params;
  const person = await Person.findByPk(id);
  if (person === null) {
    res.status(404).send("User not found");
  } else {
    person.set(req.body);
    await person.save();
    res.status(200).send("Successfully updated");
    cache.del("person" + id);
  }
}

export const personController = {
  savePerson,
  findPerson,
  listPersons,
  deletePerson,
  updatePerson,
};
