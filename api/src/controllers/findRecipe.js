require('dotenv').config();
const {API_KEY} = process.env;
const {Recipe, Diets} = require('../db')
const axios = require('axios');

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