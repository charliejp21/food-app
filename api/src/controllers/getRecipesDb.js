const {Recipe, Diets} = require('../db')

const getAllRecipesDb = async () => {

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

    return responseDb;

};

module.exports = getAllRecipesDb;