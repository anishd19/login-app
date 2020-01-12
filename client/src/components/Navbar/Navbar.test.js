import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import NavBar from "./Navbar";
import store from "../../store";

afterEach(cleanup);

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <NavBar />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders html elements", () => {
  const { getByText } = render(
    <Provider store={store}>
      <NavBar />
    </Provider>
  );

  expect(getByText(/Login App/i)).toBeTruthy();
  expect(getByText(/Log out/i)).toBeTruthy();
});

it("logout button click", () => {
  const { getByText } = render(
    <Provider store={store}>
      <NavBar />
    </Provider>
  );
  fireEvent.click(getByText(/Log out/i));
});
