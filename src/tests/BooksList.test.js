import { shallow } from 'enzyme';
import React from 'react';
import BooksList from '../BooksList';
import './testSetup'

describe("BooksList", () => {
    let wrapper;
    beforeEach(() => {
        wrapper=shallow(<BooksList/>);
    })

    it("renders a div with the class 'list-books'", () => {
        expect(wrapper.find('.list-books')).toBeDefined();
    });

     it("renders a div with the class 'list-books-title'", () => {
        expect(wrapper.find('.list-books-title')).toBeDefined();
    });

})