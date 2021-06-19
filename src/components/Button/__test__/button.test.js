import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

import Button from "../index";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="click me please" />);
  expect(getByTestId("button")).toHaveTextContent("click me please");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button label="save" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button label=" world" />).toJSON();
  expect(tree).toMatchSnapshot();
});
