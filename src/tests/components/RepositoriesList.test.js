import React from 'react';
import  RepositoriesList  from "../../components/RepositoriesList";
import { shallow } from "enzyme";

test('should render snapshot', () => {
   const wrapper = shallow(<RepositoriesList />)
    expect(wrapper).toMatchSnapshot();
})