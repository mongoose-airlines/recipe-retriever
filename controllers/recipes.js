var Recipe = require('../models/recipe');

module.exports = {
    new: newRecipe,
    create,
    index,
    show,
    delete: deleteRecipe,
    edit,
    update
}

function index(req, res) {
    Recipe.find({})
    .then((recipes) => {
        res.render('recipes/index', { recipes })
    })
}

function newRecipe(req, res) {
    res.render('recipes/new');
}

function create(req, res) {
    req.body.ingredients = req.body.ingredients.replace(/\s*,\s*/g, ',');
    if (req.body.ingredients) req.body.ingredients = req.body.ingredients.split(',');
    Recipe.create(req.body)
    .then((recipe) => {
        console.log('Added recipe to database:', recipe);
        res.redirect('/recipes')
    })
} 

function show(req, res) {
    Recipe.findById(req.params.id)
    .then((recipe) => {
        res.render('recipes/show', { recipe })
    })
}

function deleteRecipe(req, res) {
    Recipe.findByIdAndDelete(req.params.id)
    .then(res.redirect('/recipes'))
}

function edit(req, res) {
    Recipe.findById(req.params.id)
    .then((recipe) => {
        res.render('recipes/edit', { recipe })
    })
}

function update(req, res) {
    req.body.ingredients = req.body.ingredients.replace(/\s*,\s*/g, ',');
    if (req.body.ingredients) req.body.ingredients = req.body.ingredients.split(',');
    Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((recipe) => {res.redirect(`/recipes/${recipe._id}`)})
}