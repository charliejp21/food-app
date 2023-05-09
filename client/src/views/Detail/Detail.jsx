import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import {getRecipesDetail} from "../../redux/action"
import {useParams } from "react-router-dom";
import {useSelector} from 'react-redux'
import style from './Detail.module.css'

const Detail = () => {

    const {id} = useParams();

    const dispatch = useDispatch(id); 

    useEffect(() => {

        dispatch(getRecipesDetail(id))

    }, [])

    const recipe = useSelector(state => state.recipeDetail.data)

    function removeTags(str) {

		if (str === null || str === "") return false;
      
		else str = str.toString();

		return str.replace(/(<([^>]+)>)/gi, "");
	}

    return(

       <div className={style.detailRecipe}>  

        <img src={recipe.image && recipe.image} alt="recipe"/>

        {recipe.name ? 
        
            (<h1>{recipe.name && recipe.name}</h1>)

        :
            (<h1>{recipe.title && recipe.title}</h1>)
        
        }

        {recipe.healthScore ? 
        
            (<h2>HealthScore: {recipe.healthScore && recipe.healthScore}</h2>)
        
        :

            (<h2>HealthScore: {recipe.healtscore && recipe.healtscore}</h2>)
        
        }

        <br/>
        <h3>Dietas:</h3>
        
         {recipe.diets ? 
            
            (<ul>
                {recipe.diets && recipe.diets.map(diet => {
                
                    return(
                    
                        <li key={diet.id}>{diet}</li>
                    
                    );
                })}
            </ul>)
            
        :
        
            (<p>Sin dietas para mostrar en esta receta</p>)
            
        }
        
        <br />
        <h3>Resumen: </h3>
        <br />
        <p className={style.summary}>{recipe.summary && removeTags(recipe.summary)}</p>
        <br />
        <h3>Pasos a seguir</h3>
        <br />

        {typeof recipe.steps === "string" ? 
            
            (<p>{recipe.steps}</p>)

        :

            (<table className={style.tableSteps}>
                <tr>
                    <th>Pasos</th>
                    <th>Instrucciones</th>
                </tr>
                {recipe.steps &&
                    recipe.steps.map((x) => (

                        <tr key={x.id}>
                            <td>{x.number}°</td>
                            <td>{x.step}</td>
                        </tr>

                ))}

            </table>)
            
        }
            
        <br />    
        <h3>-Enjoy-</h3>
           
       </div>

    )
}

export default Detail;