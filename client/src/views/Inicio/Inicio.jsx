import style from "./Inicio.module.css"

const Inicio = () => {

    return(

      <div className={style.mainContainer}>

        <p><img src="https://foodforfree.org/wp-content/uploads/2019/02/FoodForFree_horizontal-logo-e1551288254517.png" alt="logo" /></p>
        <h1>Healty Recipes</h1>
        <h2>All Your Food. One Place.</h2>
        <h3>Welcome and now filter the recipes for healty score</h3>
        <br/>
        <button><a href="/recipes">Ingresar</a></button>

      </div>

  )
}

export default Inicio;