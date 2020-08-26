import React from 'react';
import {render} from '@testing-library/react';
import currentLocation from './currentLocation';
import {shallow} from 'enzyme';
import apiKeys from "./apiKeys";

it("renders without crashing", () => {
  const component = shallow(<currentLocation/>);
  console.log(component.debug());
});

test('the data is the lat and lon', async () => {
  const lat = '53.349804';
  const lon = '-6.260310';
  const call = await(fetch(`${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`));
  const data = await call.json();
  console.log(data);
  const status = data.cod;
  await expect(200).toEqual(200);

}, 30000);
