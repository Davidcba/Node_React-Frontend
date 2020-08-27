import React from "react";

describe('Input text ', () => {
    it('Should  correctly get the text onChange', function(){
        const component = mount(<Form />);
        const input = component.find('input').at(0);
        input.instance().value = 'hello';
        input.simulate('change');
        expect(component.state().e).toEqual('hello');
    })

    it('My Test Case', () => {
        expect(true).toEqual(true);
    });
});