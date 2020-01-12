import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

afterEach(cleanup);

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders html elements", () => {
  const { getByText } = render(<App />);
  const LoginComp = getByText(/Login App/i);
  expect(LoginComp).toBeInTheDocument();
  const SignUp = getByText(/Sign Up/i);
  expect(SignUp).toBeInTheDocument();
  const ForgotPassword = getByText(/Forgot Password/i);
  expect(ForgotPassword).toBeInTheDocument();
  const Submit = getByText(/Submit/i);
  expect(Submit).toBeInTheDocument();
  const NeedHelp = getByText(/Need Help?/i);
  expect(NeedHelp).toBeInTheDocument();
});
