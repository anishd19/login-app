import React from "react";
import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import Home from "./Home";
import store from "../../store";

afterEach(cleanup);

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders html elements", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  expect(getByText(/Welcome to Home Page/i)).toBeTruthy();
  expect(getByText(/Coded by Anish Dhamodaran/i)).toBeTruthy();
});
