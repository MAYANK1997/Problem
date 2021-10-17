// Test Case 2

//Check if Routing works properly

// Clicking Products navigate to Homepage

// Clicking Carts navigates to Carts Page

import { render as rtlRender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./stores";

const render = (ui, { route = "/", store1 = store, ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  window.history.pushState({}, "Test page", route);

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

test("full app rendering/navigating", () => {
  render(<App />);
  expect(screen.getByTestId("head")).toBeTruthy();

  userEvent.click(screen.getByTestId("Carts"));

  expect(screen.getByTestId("My Cart")).toBeTruthy();
});
