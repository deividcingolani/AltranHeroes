import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = shallow(<App />);

  return {
    enzymeWrapper
  };
}

describe("components", () => {
  describe("App", () => {
    it("should render self and subcomponents", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.exists()).toBeTruthy();
      expect(enzymeWrapper.find("div").hasClass("App")).toBe(true);
    });
  });
});
