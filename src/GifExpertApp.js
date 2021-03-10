import React, { useState } from 'react'
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Dragon ball"])

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {categories.map(category =>
                    <GifGrid 
                    key={category}
                    category={category}/>)
                }
            </ol>
        </div>
    )
};

export default GifExpertApp






//Comentarios y pruebas:

    // const handleAdd = () => {
    //     setCategory([...categories, "One Piece"])
    // }

