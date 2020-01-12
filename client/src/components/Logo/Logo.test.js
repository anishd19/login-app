import React from "react";
import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Logo from "./Logo";

afterEach(cleanup);

it("renders correctly", () => {
  const tree = renderer.create(<Logo />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders html elements", () => {
  const { getByText } = render(<Logo />);
  expect(getByText(/Login App/i)).toBeTruthy();
});
