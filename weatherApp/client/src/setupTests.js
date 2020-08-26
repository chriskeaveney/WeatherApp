import '@testing-library/jest-dom/extend-expect';
import { configure } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import EnzymeAdapter from "enzyme-adapter-react-16";


Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});
