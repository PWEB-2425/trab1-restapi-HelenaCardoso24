const express = require('express');
const router = express.Router();
const alunoCtrl = require('./controlers');

router.get('/',alunoCtrl.get );
router.post('/', alunoCtrl.post);
router.delete('/:id',alunoCtrl.delete);
router.get('/:nome',alunoCtrl.procurarAluno);
router.put('/:id',alunoCtrl.AtualizarAluno);
router.get('/id/:_id',alunoCtrl.procurarAluno);

module.exports = router;