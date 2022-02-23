import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue( e.target.value );
    }

    const handleSubmit = (e)=>{
e.preventDefault();//Obtiene el valor por defecto
if(inputValue.trim().length >2){
    setCategories(categ => [inputValue,...categ,]);//agregar el valor ingresado por el usr

}
    }
    //onChange evita que se haga refresh la pagina
    return (
        <form onSubmit={handleSubmit}>
           <input type="text" 
           value={inputValue} 
           onChange={handleInputChange}>
           </input>
           </form>
    )
 
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}


