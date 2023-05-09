require('dotenv').config();
const {API_KEY} = process.env;
const axios = require ('axios');
const {Recipe, Diets} = require('../db')

const getAllRecipes = async () => {

    const allRecipes = await Recipe.findAll({attributes: ["id", "name", "summary", "healthScore", "steps", "image"],
		include: { model: Diets },
	});

	const responseDb = await allRecipes.map((x) => {

		return {
			id: x.dataValues.id,
			title: x.dataValues.name,
			summary: x.dataValues.summary,
			healthScore: x.dataValues.healthScore,
			steps: x.dataValues.steps,
			image:
				x.dataValues.image ||
				"https://st3.depositphotos.com/1064969/18252/v/450/depositphotos_182528054-stock-illustration-flat-grayscale-icon-burger.jpg",

		};
	});

	const responseApi = await axios.get(
		`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`
	);

	const newData = responseApi.data.results.map((recipe) => {
		return {
			id: recipe.id,
			title: recipe.title,
			summary: recipe.summary,
			healthScore: recipe.healthScore,
			steps: recipe.steps,
			image: recipe.image,
			diets: recipe.diets.map((y) => y)
		}
	});

    return  [...newData, ...responseDb]
};

module.exports = getAllRecipes;