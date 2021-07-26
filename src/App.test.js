import React from "react";
import { mount } from "enzyme";
import Counter from "./Counter"
import MyList from "./MyList"


describe("Counter Testing", () => {
  let counter;
  beforeEach(() => {
    counter = mount(<Counter />);
  });

  test("counter classname", () => {
    expect(counter.find('#counter-container').hasClass('Counter')).toBe(true);
  });

  test("counter title", () => {
    expect(counter.find("h1").text()).toContain("This is counter component");
  });

  test("increment button text", () => {
    expect(counter.find("#increment-btn").text()).toBe("Increment");
  });

  test("counter initial value", () => {
    expect(counter.find("#counter-value").text()).toBe("0");
  });

  test("click increment button", () => {
    counter.find("#increment-btn").simulate("click");
    expect(counter.find("#counter-value").text()).toBe("1");
  });

  test("click decrement and increment button", () => {
    counter.find("#increment-btn").simulate("click");
    expect(counter.find("#counter-value").text()).toBe("1");
    counter.find("#decrement-btn").simulate("click");
    expect(counter.find("#counter-value").text()).toBe("0");
  });
});

describe("MyList Testing", () => {
  let mylist;
  beforeEach(() => {
    mylist = mount(<MyList/>);
  });

  test("MyList classname", () => {
    expect(mylist.find('div').first().hasClass('MyList')).toBe(true);
  });

  test("MyList title", () => {
    expect(mylist.find("h1").text()).toContain("This is MyList Component");
  });

  test("form button", () => {
    expect(mylist.find("form").find("button").text()).toBe("Submit");
  });

  test("form button onClick", () => {
    expect(mylist.find("form").find("button").find('onClick')).toBeDefined();
  });
  
  test("input set value", () => {
    const input = mylist.find("form").find("input"); 
    input.instance().value = "99";
    expect(input.instance().value).toEqual("99");  
  });

  test("input change value", () => {
    const input = mylist.find("form").find("input");
    input.simulate('focus');
    input.simulate('change', {target:{ value: '50' }});  
    expect(input.instance().value).toEqual("50");  
  });

});
