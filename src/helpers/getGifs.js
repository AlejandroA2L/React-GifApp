
export const getGifs = async(category)=>{

    const url =  `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=BiPPC1Dl9hrqPb29m3SneDU1SKJkRGU1`;
    const res = await fetch( url );
    const  { data }   =  await res.json();
    console.log(data);

    const gif = data.map( img => {
        return {
            id:img.id,
            title:img.title,
            url:img.images?.fixed_height.url
        }
    });
    
    
    return gif;
}