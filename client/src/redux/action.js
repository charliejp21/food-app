import axios from "axios";
import { GET_ALL_RECIPES, GET_RECIPES_DETAIL, GET_DIETS, GET_RECIPE_BY_NAME, FILTER_DIET, SORT, GET_PAGE } from "./action-types";

export const getAllRecipes = () => async (dispatch) => {

	const apiData = await axios.get("http://localhost:3001/recipes")

	const recipes = apiData.data; 

	dispatch({

		type: GET_ALL_RECIPES,
		payload: recipes

	});

};

export const getRecipesDetail = (id) => async (dispatch) => {

	const apiData = await axios.get(`http://localhost:3001/recipes/${id}`)

	const recipe = apiData.data;

	dispatch({

		type: GET_RECIPES_DETAIL,
		payload: recipe,

	});
		
};

export const getDiets = () => async (dispatch) => {

	const apiData = await axios.get("http://localhost:3001/diets")

	const diets = apiData.data;
	
	dispatch({
		type: GET_DIETS,
		payload: diets,
	});
	
};


export const getRecipeByName = (name) => async (dispatch) => {

	const apiData = await axios.get(`http://localhost:3001/recipes?name=${name}`);

	const recipe = apiData.data;

	dispatch({

		type: GET_RECIPE_BY_NAME,
		payload: recipe,
		
	});

};

export function getPage(pages) {

	return async function (dispatch) {

		dispatch({
			type: GET_PAGE,
			payload: pages,
		});

	};
    
}

export function sort(orden) {

	return async function (dispatch) {

		dispatch({
			type: SORT,
			payload: orden,
		});

	};
	
}

export function filterdiet(dieta) {

	return async function (dispatch) {

		dispatch({
			type: FILTER_DIET,
			payload: dieta,
		});

	};

}