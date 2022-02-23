import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({title, url}) => {

    //console.log(id,title,url);

    return (
        <div className="card animate__animated animate__fadeInDown">
            <img src={ url } alt={ title }></img>
            <p>{ title }</p>
        </div>
    )

    GifGridItem.propTypes={
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }
}

/*
    1.Configurar Enzyme
    2.Enzyme to json
    3.Mostar el componente correctamente
        *shallow
        *wraper .toMatchSnapshot()
*/

