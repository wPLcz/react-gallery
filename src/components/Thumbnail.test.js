import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import Thumbnail from "./Thumbnail";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Thumbnail/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Thumbnail/>).toJSON();
  expect(tree).toMatchSnapshot();
});
