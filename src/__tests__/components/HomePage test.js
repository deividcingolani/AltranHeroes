import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { setHookState } from "../../utils/test";
import { HomePage } from "../../containers/HomePage/HomePage";

const reactMock = require("react");

Enzyme.configure({ adapter: new Adapter() });

describe("ComponentWithHook component", () => {
  it("should render itself", () => {
    reactMock.useState = setHookState({
      gnomes: [],
      error: false,
      initialized: false
    });

    
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('.gnomes').length).toEqual(1);
    expect(wrapper.find('.gnomeModal').length).toEqual(1);
  });
});
