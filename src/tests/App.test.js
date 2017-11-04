import { shallow } from 'enzyme';
import React from 'react';
import BooksApp from '../App';
import './testSetup'


describe("App", () => {

    beforeEach(() => {
        let wrapper=shallow(<BooksApp/>);
    })

    it("renders a div with a text", () => {
        let wrapper=shallow(<BooksApp/>);
        expect(wrapper.find('.main').text()).toBe("The start of the app");
    })
})