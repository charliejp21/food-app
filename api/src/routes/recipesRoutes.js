const {Router} = require('express')
const {getRecipesHandler, getRecipeByIdHandler, createRecipeHandler} = require('../handlers/recipeHandlers');

const recipesRouter = Router();

/* const validate = (req, res, next) => {

    const {title, summary, healthScore, steps, image} = req.body;

    if(!title || !summary || !healthScore || !steps || !image){

       return res.status(400).json({error: "Faltan datos"})

    } 
    
    next();

} */

recipesRouter.get("/", getRecipesHandler);

recipesRouter.get("/:idRecipe", getRecipeByIdHandler);

recipesRouter.post("/create", createRecipeHandler);


module.exports = recipesRouter;