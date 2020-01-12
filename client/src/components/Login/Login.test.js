import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import Login from "./Login";
import store from "../../store";

afterEach(cleanup);

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Login location={false} />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders html elements", () => {
  const { getByText, getAllByText } = render(
    <Provider store={store}>
      <Router>
        <Login location={false} />
      </Router>
    </Provider>
  );

  expect(getAllByText(/Login/i)).toBeTruthy();
  expect(getByText(/Submit/i)).toBeTruthy();
  expect(getByText(/Sign Up/i)).toBeTruthy();
  expect(getByText(/Forgot Password/i)).toBeTruthy();
  expect(getByText(/Need Help?/i)).toBeTruthy();
});

it("Enter email and password and submit", () => {
  const { getByText, getByPlaceholderText } = render(
    <Provider store={store}>
      <Router>
        <Login location={false} />
      </Router>
    </Provider>
  );

  userEvent.type(getByPlaceholderText("Email"), "anishd19@gmail.com");
  expect(getByPlaceholderText("Email")).toHaveAttribute(
    "value",
    "anishd19@gmail.com"
  );

  userEvent.type(getByPlaceholderText("Password"), "secretPass123");
  expect(getByPlaceholderText("Password")).toHaveAttribute(
    "value",
    "secretPass123"
  );

  fireEvent.click(getByText(/Submit/i));
});
