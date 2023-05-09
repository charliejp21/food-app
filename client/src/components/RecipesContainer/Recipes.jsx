import Recipe from '../Recipe/Recipe';
import style from "./Recipes.module.css";
import {useSelector} from 'react-redux'

export default function Recipes() {

   const recipes = useSelector(state => state.recipes.data)

   return (
   
      <div className={style.divRecipes}>

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

   )
   
}
