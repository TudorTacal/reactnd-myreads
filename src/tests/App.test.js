import { shallow } from 'enzyme';
import React from 'react';
import BooksApp from '../App';
import './testSetup'


describe("App", () => {
    let wrapper;
    beforeEach(() => {
        wrapper=shallow(<BooksApp/>);
    })

    it("renders a div with a text", () => {
        expect(wrapper.find('.app').text()).toBe("The start of the app");
    })
})