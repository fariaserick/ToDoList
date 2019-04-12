import React from "react";
import { shallow, mount, render } from "enzyme";
import App from "../App";

describe("A suite", function() {
  it("does app contains a div with className main", function() {
    // expect(true).toBe(true);
    const wrapper = mount(<App />); // mount/render/shallow when applicable

    expect(wrapper.find(".main")).toExist();
    // expect(wrapper.find("#not")).not.toBeDisabled();
    // expect(shallow(<App />).contains(<div className="main" />)).toBe(true);
  });

  it("contains spec with an expectation", function() {
    // expect(shallow(<App />).is(".main")).toBe(true);
  });

  it("contains spec with an expectation", function() {
    // expect(mount(<App />).find(".main").length).toBe(1);
  });
});
