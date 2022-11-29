const Person = require("../models/Person");

const salvarPerson = async (req, res) => {
  try {
    const person = Person.build(req.body);
    await person.save();
    res.status(201).send("Usuário criado");
  } catch {
    res.status(400).send("Falha ao salvar");
  }
};

const listarPersons = async (req, res) => {
  const persons = await Person.findAll();
  res.status(200).send(persons);
};

const buscarPerson = async (req, res) => {
  const person = await Person.findByPk(req.params.id);
  if (person === null) {
    res.status(404).send("Usuário não encontrado");
  } else {
    res.status(200).send(person);
  }
};

const deletarPerson = async (req, res) => {
  const person = await Person.findByPk(req.params.id);
  if (person === null) {
    res.status(404).send("Usuário não encontrado");
  } else {
    await person.destroy();
    res.status(200).send("Removido com sucesso");
  }
};

const atualizarPerson = async (req, res) => {
  const person = await Person.findByPk(req.params.id);
  if (person === null) {
    res.status(404).send("Usuário não encontrado");
  } else {
    person.set(req.body);
    await person.save();
    res.status(200).send("Atualizado com sucesso");
  }
};

module.exports = {
  salvarPerson,
  listarPersons,
  buscarPerson,
  deletarPerson,
  atualizarPerson,
};
