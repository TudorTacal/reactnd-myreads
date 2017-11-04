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
        console.log(wrapper);
        expect(wrapper.contains(<div className='.list-books'></div>)).toBe(true);
    })
})