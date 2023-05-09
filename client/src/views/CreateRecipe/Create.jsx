import style from "./Create.module.css"
import Form from "../../components/Form/FormRecipe"

const CreateRecipe = () => {

    return(

      <div className={style.createRecipePage}>

        <h1> ¡Crea tu propia receta !</h1>

        <Form />

      </div>

  )
}

export default CreateRecipe;