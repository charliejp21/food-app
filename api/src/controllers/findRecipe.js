require('dotenv').config();
const {API_KEY} = process.env;
const {Recipe} = require('../db')
const axios = require('axios');

/* const findRecipeByName = async (name) => {

    const recipesByName = await Recipe.findAll({ 

        where: { name: name }
        
    })

    const apifindByName = (

        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&number=2`)

    ).data.results;

    const newData = apifindByName.map((recipe) => {
        
		return {
			id: recipe.id,
			title: recipe.title,
			image: recipe.image
		}
	});

    return [...newData, ...recipesByName];
    
} */

const findRecipeById  = async (idRecipe, source) => {

    if(source === "api"){

       const findApi = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`);

       return {
            id: findApi.data.id,
            title: findApi.data.title,
            summary: findApi.data.summary,
            healtscore: findApi.data.healthScore,
            steps: findApi.data.analyzedInstructions[0].steps,
            image: findApi.data.image,
            diets: findApi.data.diets,
        };

    }else{

       return await Recipe.findByPk(idRecipe);
       
    } 

}

module.exports = {
     
    findRecipeById
    
};