import style from './SearchResults.module.css'
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import {useEffect} from 'react';
import { getRecipeByName } from '../../redux/action';
import {useParams } from "react-router-dom";

import Recipe from "../../components/Recipe/Recipe";


const RecipesResultsContainer = () => {

    const {name} = useParams();

    const dispatch = useDispatch(name); 

    useEffect(() => {

        dispatch(getRecipeByName(name))

    }, [])

    const recipes = useSelector(state => state.searchResults.data)

    return(

        <div>  

       {recipes.length ? 
            
            (        
                <div className={style.divResultsContainer}> 
                <h2 className={style.titulo}>Se muestran los siguientes resultados:</h2>
                <div className={style.recipeContainers}> 

                    {recipes.map(recipe => {

                        return <Recipe 

                        id = {recipe.id}
                        title = {recipe.title}
                        summary = {recipe.summary}
                        healthScore = {recipe.healthScore}
                        image = {recipe.image}

                        />

                    })}
                    
                </div>
                
            </div>)
            
        :

            (

                <h1 className={style.h1Search}>Prueba buscando de otra manera</h1>
                
            )
        }

       </div>

    )
}

export default RecipesResultsContainer;