import style from './Recipe.module.css';

export default function Recipe(props) {

   function removeTags(str) {

		if (str === null || str === "") return false;
      
		else str = str.toString();

		return str.replace(/(<([^>]+)>)/gi, "");
	}

   return (

      <div className={style.divRecipe}>
         
         <img src={props.image} className={style.imageRecipe} alt="recipe"/>
         <h1><a href={"/recipe/" + props.id}>{props.title}</a></h1>
         <h2>HealthScore: <br/>{props.healthScore}</h2>
         <h3>Dietas: <br/></h3>
         {props.diets ? 
            
            (<ul className={style.ulclass}>
                {props.diets && props.diets.map(diet => {
                
                    return(
                    
                        <li key={diet.id}>{diet}</li>
                    
                    );
                })}
            </ul>)
            
        :
        
            (<p>Sin dietas para mostrar en esta receta</p>)
            
        }
         <h3>Resumen </h3>
         <p>{props.summary && removeTags(props.summary)}</p>
         <button><a href={"/recipe/" + props.id}>Ver receta completa</a></button>

      </div>
      
   );
   
}
