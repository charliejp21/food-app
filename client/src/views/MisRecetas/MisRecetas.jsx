import {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getAllRecipesDb} from "../../redux/action"

import style from './MisRecetas.module.css'

import Recipe from "../../components/Recipe/Recipe";

const MisRecetas = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getAllRecipesDb())

    }, [dispatch])

    const recipesDb = useSelector(state => state.dbRecipes.data)

    return(

        <div>  

        {recipesDb.length ? 
             
             (        
                 <div className={style.divResultsContainer}> 
                 <h2 className={style.titulo}>Recetas creadas</h2>
                 <div className={style.recipeContainers}> 
                     {recipesDb.map(recipe => {
 
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
 
                 <h1 className={style.h1Search}>Sin recetas creadas para mostrar</h1>
                 
             )
         }
 
        </div>

    )
}

export default MisRecetas;