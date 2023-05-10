import React from "react";
import SearchBar from '../SearchBar/SearchBar';
//import { useLocation } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = () =>{

   //const {pathname} = useLocation();

    return (
 
        <div className={style.topnav}>
            <p><img src="https://foodforfree.org/wp-content/uploads/2019/02/FoodForFree_horizontal-logo-e1551288254517.png" alt="logo" /></p>

            <a href="/recipes">Recetas</a>

            <a href="/create">Crear receta</a>

            <a href="/">Regresar a inicio</a>

            <a href="/mis-recetas">Mis recetas</a>

            <SearchBar></SearchBar>

        </div>
      
    );
    
 }

 export default Nav;