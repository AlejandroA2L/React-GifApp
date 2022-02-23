import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {
 
    //const categories = ["Dragon Ball","ATOT","One Punch"];
    const [categories, setCategories] = useState([' ']);
    /*const handleAdd = ()=>{
        //'Agregar un nuevo elemento'
        setCategories(categor =>[...categories,'HunterxHunter']);
    }*/
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/*<button onClick={handleAdd}>Agregar</button>*/}
            <ol>
                {
                    categories.map(category=>( <GifGrid
                        key={category}
                        category={category}
                    >
                    </GifGrid>)
                    )
                }
            </ol>
        </div>
    )
}
