const getAllRecipes = require('../controllers/getRecipes')
const getAllRecipesDb = require('../controllers/getRecipesDb')
const postRecipe = require('../controllers/postRecipe')
const {findRecipeById} = require('../controllers/findRecipe')

const getRecipesHandler = async (req, res) => {

    const { name } = req.query;

    const allRecipes = await getAllRecipes();

    if(name){

        try {

            let responseQuery = allRecipes.filter((recipe) => recipe.title.toLowerCase().includes(name.toLowerCase()));

            responseQuery.length

            ? res.status(200).send(responseQuery)

            : res.status(401).send("No existe esa receta con ese nombre")
            
        } catch (error) {
            
            return res.status(401).send("Error")
            
        }

    }else{
        
        res.send(allRecipes);
    }

};

const getRecipesDbHandler = async (req, res) => {

        try {

            const AllRecipesDb = await getAllRecipesDb();

            res.send(AllRecipesDb);
            
        } catch (error) {
            
            return res.status(401).send("Error")
            
        }

};

const getRecipeByIdHandler = async (req, res) => {

    const {idRecipe} = req.params;

    const source = isNaN(idRecipe) ? "bdd" : "api";

    try {

        const findById  = await findRecipeById(idRecipe, source);

        res.status(200).json(findById);
        
    } catch (error) {

        res.status(404).json({error: error.message});
        
    }

};

const createRecipeHandler = async (req, res) => {

    const {name, summary, healthScore, steps, image, diets} = req.body;

    const newRecipe = await postRecipe(name, summary, healthScore, steps, image, diets)

     res.send("ok");

};

module.exports = {

    getRecipesHandler,
    getRecipeByIdHandler,
    getRecipesDbHandler,
    createRecipeHandler

}