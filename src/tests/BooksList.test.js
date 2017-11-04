import { shallow, mount } from 'enzyme';
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

    it ("renders a title with the text 'My Reads'", () => {
        expect(wrapper.contains(
            <div className='list-books'>
                <div className='list-books-title'>
                    <h1>My Reads</h1>
                </div>
            </div>
        )).toBe(true);
    });
})