import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { render } from '@testing-library/react';

it("renders without crashing", () => {
  const component = shallow(<App />);
  console.log(component.debug());
});
