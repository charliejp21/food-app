import { useState } from 'react';
import style from "./SearchBar.module.css"
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {

   const navigate = useNavigate();

   const [search, setSearch] = useState({

      name: "",

   });

   const handleChangeSearch = (event) => {

      const property = event.target.name;

      const value = event.target.value;

      setSearch({[property]:value})

   };

   const submitHandlerSearch = (event) => {

      navigate(`/results/${search.name}`)

  }

   return (

      <>

      <form onSubmit={submitHandlerSearch}>

         <input type="text" value={search.name} name="name" onChange={handleChangeSearch} className={style.inputSearch}/>

         <button className={style.searchButton}>Buscar</button>

      </form>
      
      </>

   );
   
}

/* onChange - Cada vez que yo escriba algo en el input ejecutar algo (una funcion) */
/* event.target es quien ejecuta (el input) y el .value lo que esta escrito en el input */
/* onClick () => onSearch(id) es así por que un click debe ejecutar una funcion, de otra manera se ejecutaría la función en automático */