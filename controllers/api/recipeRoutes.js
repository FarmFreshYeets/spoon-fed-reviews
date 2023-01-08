const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

//Add new recipe
router.post('/', withAuth, async (req, res) => {
    try {
        const newRecipe = await Recipe.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newRecipe);
    } catch (err) {
        res.status(400).json(err);
    }
})

//Delete recipe
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const recipeData = await Recipe.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(recipeData)
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router