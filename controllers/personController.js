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
  const person = await Person.findByPk(req.params.id);
  if (person === null) {
    res.status(404).send("User not found");
  } else {
    res.status(200).send(person);
  }
}

async function deletePerson(req, res) {
  const person = await Person.findByPk(req.params.id);
  if (person === null) {
    res.status(404).send("User not found");
  } else {
    await person.destroy();
    res.status(200).send("Successfully deleted");
  }
}

async function updatePerson(req, res) {
  const person = await Person.findByPk(req.params.id);
  if (person === null) {
    res.status(404).send("User not found");
  } else {
    person.set(req.body);
    await person.save();
    res.status(200).send("Successfully updated");
  }
}

export const personController = {
  savePerson,
  findPerson,
  listPersons,
  deletePerson,
  updatePerson,
};
