import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState("Hola mundo") //si ponemos nuestro valor en useState(), este se marca como vacio

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(cats=>[inputValue, ...cats, ]) // vamos a llamar a un callback que mantiene el estado anterior
            setinputValue("") //Cambiamos el valor para que no pueda hacer un doble posteo de "Hola Mundo"
        }
        
    }

    return (
        //Usaremos le onSumbit para poder usar el "Enter" como click. Ademas vamos a evitar el refresh de la pagina
        //mediante el e.preventDeafult
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}>

            </input>
        </form>
    )
}

AddCategory.propTypes={ //primero ponemos el nombre del componente
    setCategories: PropTypes.func.isRequired,  //tenemos que definir el data type de la prop
}

export default AddCategory