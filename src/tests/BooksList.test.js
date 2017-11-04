import { shallow, mount } from 'enzyme';
import React from 'react';
import BooksList from '../BooksList';
import Header from '../Header'
import './testSetup'

describe("BooksList", () => {
    let wrapper;
    beforeEach(() => {
        wrapper=shallow(<BooksList/>);
    })

    it("renders a Header component", () => {
        expect(wrapper.contains(<Header/>)).toBe(true);
    });

})