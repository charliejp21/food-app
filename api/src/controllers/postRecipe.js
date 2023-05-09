const {Recipe, Diets} = require('../db')

const postRecipe = async (name, summary, healthScore, steps, image, diets) => {

    const newRecipe = await Recipe.create({

        name,
        summary,
        healthScore,
        steps,
        image

    });

    const postDiets = async () => {

        let allDietTypes = diets.map((e) =>
          Diets.findOrCreate({ where: { name: e } })
      
        );
      
    };
    
    return "Receta creada";    
    
}

module.exports = postRecipe;