const express = require('express');
const router = express.Router();
const alunoCtrl = require('./controlers');

router.get('/',alunoCtrl.get );
router.post('/', alunoCtrl.post);
router.delete('/:id',alunoCtrl.delete);

module.exports = router;