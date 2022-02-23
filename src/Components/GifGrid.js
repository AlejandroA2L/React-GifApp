import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import React, { useEffect,useState } from 'react';
//import { getGifs } from '../helpers/getGifs';
//import React,{ useState } from 'react';

export const GifGrid = ({category}) => {
    
    //const [images, setImages] = useState([]);
   

    const {data:images,loading} = useFetchGifs(category);

  
    
    //getGifs();
    return (
        <>
        
        <h3>{category}</h3>
        {loading && <p>Loading</p>}
        <div className='card-grid'>
                {
                    images.map(img =>(
                       <GifGridItem 
                       key = { img.id }
                       { ...img }>
                       </GifGridItem>
                       
                    ))
                }
                    
            </div>
        </>
    )
}