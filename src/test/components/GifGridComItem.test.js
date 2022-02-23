import { GifGridItem } from "../../Components/GifGridItem"
import {shallow} from 'enzyme';
import React from 'react';
import { shallowToJson } from "enzyme-to-json"

describe('Pruebas en el GifGridItem', () => {
    
    const title = 'aja';
    const url = 'http://adsdasdasdsads.jpg'
    test('debe mostrar el componente correctamente', () => {
        
        const wrapper = shallow(<GifGridItem title={title} url={url }></GifGridItem>)
        expect( wrapper ).toMatchSnapshot();
    })
    
})
