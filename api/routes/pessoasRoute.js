const { Router } = require('express')
const PessoaController = require("../controllers/PessoaController")

const router = Router()

router.get('/pessoas', PessoaController.selecionarPessoas)

router.get('/pessoas/:id', PessoaController.selecionarUmaPessoa)

router.post('/pessoas', PessoaController.cadastrarPessoa)

router.put('/pessoas/:id', PessoaController.atualizarPessoa)

router.delete('/pessoas/:id', PessoaController.apagarPessoa)

router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.selecionarUmaMatricula)

router.post('/pessoas/:estudanteId/matricula', PessoaController.cadastrarMatricula)

router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula)

router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagarMatricula)

module.exports = router