import { shallow } from 'enzyme';
import React from 'react';
import BooksApp from '../App';
import './testSetup'

describe("BooksList", () => {
    let wrapper;
    beforeEach(() => {
        wrapper=shallow(<BooksList/>);
    })

    it("renders a div with the class 'list-books'", () => {
        expect(wrapper.find('.list-books')).toBe(true);
    })
})