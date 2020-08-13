var express = require('express');
var router = express.Router();
var recipesCtrl = require('../controllers/recipes');

router.get('/', recipesCtrl.index);
router.get('/new', recipesCtrl.new);
router.post('/', recipesCtrl.create);
router.get('/:id', recipesCtrl.show);
router.delete('/:id', recipesCtrl.delete);
router.get('/:id/edit', recipesCtrl.edit);
router.put('/:id', recipesCtrl.update);

module.exports = router;