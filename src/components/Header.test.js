import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import Header from "./Header";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Header/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly passing title', () => {
  const tree = renderer.create(<Header title={"Mocked Title"}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
