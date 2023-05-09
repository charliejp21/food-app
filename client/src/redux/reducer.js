import {GET_ALL_RECIPES, GET_RECIPES_DETAIL, GET_DIETS, GET_RECIPE_BY_NAME, FILTER_DIET, GET_PAGE, SORT} from "./action-types";

const initialState = {

	recipes: {

		data: [],
		filterData: [],
		activeName: "",
		activeFilter: "default",
		activeSort: "default",
		pagination: { max: [], currentPage: 1, pageLength: 9 },

	},

	recipeDetail: {

		data: [],
	},

	searchResults:{

		data:[],
	},

	dietsTypes: {

		data: [],
	}

};

function paginador(x, y) {

	const max = Math.ceil(x.length / y);

	const paginas = [];

	for (let i = 1; i <= max; i++) {

		paginas.push(i);

	}

	return paginas;
}

function configSorts(arr, payload, original) {

	let ordenamiento;
	
	if (payload === "a-z") {
	
		ordenamiento = arr.sort(function (x, y) {
	
			return x.title.localeCompare(y.title);
	
		});
	
	} else if (payload === "z-a") {
	
		ordenamiento = arr.sort((x, y) => y.title.localeCompare(x.title));
	
	} else if (payload === "menor-mayor") {
		ordenamiento = arr.sort((x, y) => x.healthScore - y.healthScore);
	
	} else if (payload === "mayor-menor") {
		ordenamiento = arr.sort((x, y) => y.healthScore - x.healthScore);
	
	} else {

		ordenamiento = original;

	}
	
	return ordenamiento;

}

function allFilters(arr, name, diet, state, sort) {
	
	console.log(arr, name, diet, state);

	let finalRes = sort !== "default" ? arr : state.recipes.data;

	const recipesFilters = finalRes.filter((recipe) => {


		
		const filterByDiet =
			diet !== "default" ? recipe.diets.includes(diet) : true;
		
			console.log("Esto es la filterByDiet: " + filterByDiet);

		return filterByDiet;
	
	});

	const resConfig = configSorts(
		
		recipesFilters,
		
		sort ? sort : state.recipes.activeSort,
		
		recipesFilters
	
	);

	
	console.log("Sort " + resConfig);
	
	return resConfig;

}


const rootReducer = (state = initialState, action) => {

	switch (action.type) {
        
		case GET_ALL_RECIPES:
			
			const res = allFilters(
				action.payload,
				state.recipes.activeName,
				state.recipes.activeFilter,
				state
			);

			console.log(res);

			const paginas = paginador(res, state.recipes.pagination.pageLength);

		return {
			...state,
			recipes: {
				...state.recipes,
				data: action.payload,
				filterData: res,
				pagination: { ...state.recipes.pagination, max: paginas },
			},
		};	

		case GET_RECIPES_DETAIL:
		
			return {
				...state,
				recipeDetail: {

					...state.recipeDetail,
					data: action.payload,

				},
			};	

		case GET_DIETS:

			return {
				...state,
				dietsTypes: {

					...state.dietsTypes,
					data: action.payload,

				},
			};		

		case GET_RECIPE_BY_NAME:

		return {
				...state, 
				searchResults: {

					...state.searchResults,
					data: action.payload,

				},
			}		

		case GET_PAGE:

			return {
				...state,
				recipes: {
					...state.recipes,
					pagination: {
						...state.recipes.pagination,
						currentPage: action.payload,
					},
				},

			};

		case SORT:

			const newArr4 = allFilters(
				state.recipes.filterData,
				state.recipes.activeName,
				state.recipes.activeFilter,
				state,
				action.payload
			);

			const paginas4 = paginador(newArr4, state.recipes.pagination.pageLength);

			return {
				...state,
				recipes: {
					...state.recipes,
					filterData: [...newArr4],
					activeSort: action.payload,
					pagination: { ...state.recipes.pagination, max: paginas4 },
				},

			};



		case FILTER_DIET:

			const filtro = allFilters(

				state.recipes.data,
				state.recipes.activeName,
				action.payload,
				state
			);

			const paginas2 = paginador(filtro, state.recipes.pagination.pageLength);

			return {
				...state,
				recipes: {
					...state.recipes,
					filterData: filtro,
					pagination: {
						...state.recipes.pagination,
						max: paginas2,
						currentPage: 1,
					},
					activeFilter: action.payload,
				},
			};

		default: {
			return {
				...state,
			};
		}
	}
};

export default rootReducer;
