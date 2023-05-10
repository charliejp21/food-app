import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./FormRecipe.module.css"
import validation from './validation';
import axios from "axios";
import {getDiets} from '../../redux/action'

const Form = () => {

    const dispatch = useDispatch();

	const diets = useSelector(state => state.dietsTypes.data)

	useEffect(() => {

		if (!diets.length) {

			dispatch(getDiets());
            
		}

	}, [dispatch]);

    const [form, setForm] = useState({

        name: "",
		summary: "",
		healthScore: "",
		steps: "",
		image: "",
		diets: [],

    })

    const [errors, setErrors] = useState({

        name: "",
		summary: "",
		healthScore: "",
		steps: "",
		image: "",
		diets: [],

    })


    const changeHandler = (event) => {

        const property = event.target.name;

        const value = event.target.value;

        setForm({...form, [property]:value})

        validation({...form, [property]:value}, errors, setErrors)

    }

    const submitHandler = (event) => {

        axios.post("http://localhost:3001/recipes/create", form)
        .then(alert("Receta creada correctamente"))
        
        setForm({
            name: '',
            summary: '',
            healthScore: '',
            steps: '',
            image: '',
            diets: []
          })

    }


    return (

        <>
        
            <form className={style.formRecipe} onSubmit={submitHandler}>
                <div>

                    <label> 1° Nombre de la receta</label>
                    <p>Sólo se permite texto y máximo 50 caracteres</p>
                    <input type="text" value={form.name} onChange={changeHandler} name="name"/>
                    <br />
                    {errors.name && <span>{errors.name}</span>}

                </div>
                <div>
                    
                    <label>2° Resumen de la receta</label>
                    <p>Sólo se permite texto y números y hasta 200 caracteres</p>
                    <textarea value={form.summary} onChange={changeHandler} name="summary"></textarea>
                    <br />
                    {errors.summary && <span>{errors.summary}</span>}

                </div>
                <div>
                    
                    <label>3° HealthScore</label>
                    <p>Sólo se permite asignar como máximo 100 puntos</p>
                    <input type="number" value={form.healthScore} onChange={changeHandler} name="healthScore" min="1" max="100"></input>
                    {errors.healthScore && <span>{errors.healthScore}</span>}

                </div>
                <div>
                    
                    <label>4° Pasos a seguir</label>
                    <p>Sólo se permiten como máximo 800 caracteres</p>
                    <textarea value={form.steps} onChange={changeHandler} name="steps"></textarea>
                    <br />
                    {errors.steps && <span>{errors.steps}</span>}

                </div>
                <div>

                    <label>5° URL de imagen</label>
                    <input type="url" value={form.image} onChange={changeHandler} name="image" />
                    <br />
                    {errors.image && <span>{errors.image}</span>}

                </div>

                <div>
						<label>6° Dietas</label>
						{diets.map((diet) => {
							return (
								<div key={diet.id} className="check">
									<label htmlFor="">
										<input
											type="checkbox"
											onChange={changeHandler}
											name="diets"
											value={diet.id}
										/>
										{diet.name}
									</label>
								</div>
							);
						})}
				</div>

                {form.name !== '' && form.summary !== '' && form.steps !== '' && form.image !== '' ? (

                    <button type="submit" >
                    Enviar
                    </button>

                ) : (
                    
                    <button type="submit" disabled>
                    Enviar
                    </button>
                )}        

            </form>
        
        
        </>

    )

}

export default Form;