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
        expect(wrapper.contains(<div className='.list-books'></div>)).toBe(true);
    });

     it("renders a div with the class 'list-books-title'", () => {
        expect(wrapper.contains(<div className='.list-books-title'></div>)).toBe(true);
    });

})