import React from 'react';
import { shallow } from 'enzyme';
import "@testing-library/jest-dom";
import { Counter } from '../components/Counter/Counter';

describe('Name of the group', () => {
    
    let wrapper = shallow(
        <Counter />
    )
    beforeEach( () => {
        wrapper = shallow(
           <Counter />
       )
    } )



    test('show the <Counter /> component correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should show by default a value equal to 100', () => {
        
        const wrapper = shallow(
            <Counter value={100} />
        )

        const counterText = wrapper.find('h3').text().trim();
        expect( counterText ).toBe(`Count: 100`)

    });

    //simulate event with buttons
    test('increment +1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h3').text().trim();

        expect(counterText).toBe(`Count: 21`)

    }); 

    test('decrement -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h3').text().trim();

        expect(counterText).toBe(`Count: 19`)

    }); 

    test('reset to the default value', () => {
        
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        //reference to the reset button
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h3').text().trim();

        expect( counterText ).toBe(`Count: 20`)
        console.log(counterText)

    }); 

});