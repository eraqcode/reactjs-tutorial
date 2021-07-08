import { render } from '@testing-library/react'
import React from 'react';
import { Saludo } from '../components/Saludo/Saludo';
import "@testing-library/jest-dom";
import { shallow } from 'enzyme';

describe('Testing in <Saludo /> component', () => {
    
    //test('should show the <Saludo /> component correctly', () => {
    //    
    //    let greet = "Hi, I´m Erik";
    //    let subtitle = "A simple web developer"

    //    const { getByText } = render(
    //        <Saludo 
    //            greet = { greet }
    //            subtitle = { subtitle }
    //        />
    //    )

    //    expect( getByText( greet ) ).toBeInTheDocument();
    //    expect( getByText( subtitle ) ).toBeInTheDocument();   

    //});

    let greet = "Hi, I´m Erik!!!";
        let subtitle = "A simple web developer"

        const wrapper = shallow(
            <Saludo 
                greet = { greet }
                subtitle = { subtitle }
            />
        ) 

    test('show <Saludo /> coponent correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('show the subtitle', () => {
        
        const h1 = wrapper.find('h1').text().trim();
        const h3 = wrapper.find('h3').text().trim();
        expect(h1).toBe( greet );
        expect(h3).toBe( subtitle );


    });
});