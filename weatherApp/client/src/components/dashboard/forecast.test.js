import React from 'react';
import {render} from '@testing-library/react';
import forecast from './forecast';
import {shallow} from 'enzyme';
import apiKeys from "./apiKeys";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

it("renders without crashing", () => {
  const component = shallow(<currentLocation/>);
  console.log(component.debug());
});

const search = (city = 'Dublin, IE') => {
  describe('forecast', () => {
    it('returns data when sendMessage is called', done => {
      var mock = new MockAdapter(axios);
      const data = {
        response: true
      };
      mock.onGet(
        `https://cors-anywhere.herokuapp.com/${apiKeys.base}weather?q=${city != "[object Object]"
        ? city
        : query}&units=metric&APPID=${apiKeys.key}`).reply(200, data);

      forecast.sendMessage(0, 'any').then(response => {
        expect(response).toEqual(data);
        done();
        console.log(data);
      });
    });
  });
};
