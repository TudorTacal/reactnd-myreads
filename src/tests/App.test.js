import { shallow } from 'enzyme';
import React from 'react';
import BooksApp from '../App';
import BooksList from '../BooksList'
import './testSetup'


describe("App", () => {
    let wrapper;
    beforeEach(() => {
        wrapper=shallow(<BooksApp/>);
    })

    it("renders a BookList component", () => {
        expect(wrapper.contains(<BooksList/>)).toBe(true);
    })
})