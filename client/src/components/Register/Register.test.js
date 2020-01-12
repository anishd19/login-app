import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import Register from "./Register";
import store from "../../store";

afterEach(cleanup);

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Register location={false} />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders html elements", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <Register location={false} />
      </Router>
    </Provider>
  );

  expect(getByText(/Forgot Password/i)).toBeTruthy();
  expect(getByText(/Need Help?/i)).toBeTruthy();
});

// it("Enter email and password and submit", () => {
//   const { getByPlaceholderText, getByLabelText } = render(
//     <Router>
//       <Login />
//     </Router>
//   );

//   userEvent.type(getByPlaceholderText("Username"), "anishd19");
//   expect(getByPlaceholderText("Username")).toHaveAttribute("value", "anishd19");

//   userEvent.type(getByPlaceholderText("firstname"), "Anish");
//   expect(getByPlaceholderText("firstname")).toHaveAttribute("value", "Anish");

//   userEvent.type(getByPlaceholderText("lastname"), "Dhamodaran");
//   expect(getByPlaceholderText("lastname")).toHaveAttribute(
//     "value",
//     "Dhamodaran"
//   );

//   userEvent.type(getByPlaceholderText("Email"), "anishd19@gmail.com");
//   expect(getByPlaceholderText("Email")).toHaveAttribute(
//     "value",
//     "anishd19@gmail.com"
//   );

//   const radio = getByLabelText("Male");
//   fireEvent.change(radio, { target: { value: "Female" } });
//   expect(radio.value).toBe("Female");

//   userEvent.type(getByPlaceholderText("Password"), "secretPass123");
//   expect(getByPlaceholderText("Password")).toHaveAttribute(
//     "value",
//     "secretPass123"
//   );

//   // fireEvent.click(getByText(/Submit/i));
// });
