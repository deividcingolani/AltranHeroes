import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { HomePage } from "../../components/Gnomes/HomePage/HomePage";

Enzyme.configure({ adapter: new Adapter() });

describe("ComponentWithHook component", () => {
  it("should render itself", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(".gnomes").length).toEqual(1);
    expect(wrapper.find(".gnomeModal").length).toEqual(1);
  });
});
