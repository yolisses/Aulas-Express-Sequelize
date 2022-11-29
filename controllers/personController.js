import { Person } from "../models/person.js";

const savePerson = async (req, res) => {
  try {
    const person = Person.build(req.body);
    await person.save();
    res.status(201).send("User created");
  } catch {
    res.status(400).send("Error on save");
  }
};

const listPersons = async (req, res) => {
  const persons = await Person.findAll();
  res.status(200).send(persons);
};

const findPerson = async (req, res) => {
  const person = await Person.findByPk(req.params.id);
  if (person === null) {
    res.status(404).send("User not found");
  } else {
    res.status(200).send(person);
  }
};

const deletePerson = async (req, res) => {
  const person = await Person.findByPk(req.params.id);
  if (person === null) {
    res.status(404).send("User not found");
  } else {
    await person.destroy();
    res.status(200).send("Successfully deleted");
  }
};

const updatePerson = async (req, res) => {
  const person = await Person.findByPk(req.params.id);
  if (person === null) {
    res.status(404).send("User not found");
  } else {
    person.set(req.body);
    await person.save();
    res.status(200).send("Successfully updated");
  }
};

export const personController = {
  savePerson,
  findPerson,
  listPersons,
  deletePerson,
  updatePerson,
};
