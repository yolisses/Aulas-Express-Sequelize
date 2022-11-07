const Pessoa = require('../models/Pessoa');

const salvarPessoa = async (req,res) =>{
    try{
        const pessoa = Pessoa.build(req.body);
        await pessoa.save();
        res.status(201).send('Usuário criado');
    }catch{
        res.status(400).send('Falha ao salvar');
    }
}

module.exports = {salvarPessoa};