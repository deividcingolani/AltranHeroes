import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Navigation } from "../../components/Nav/Navigation/Navigation";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = shallow(<Navigation />);

  return {
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Navigation", () => {
    it("should render self and subcomponents", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find("div").hasClass("navigation")).toBe(true);
      expect(enzymeWrapper.find(".navigationBrand").text()).toBe(
        "ALTRAN HEROES"
      );
      expect(enzymeWrapper.find(".navLink").length).toEqual(1);
    });
  });
});
