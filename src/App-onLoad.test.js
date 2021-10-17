import { render as rtlRender, screen } from "@testing-library/react";

import * as React from "react";
import { Provider } from "react-redux";
import store from "./stores";
import App from "./App";
import userEvent from "@testing-library/user-event";

const render = (ui, { store1 = store, ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// To test header links gets displayed properly
test("loads header", () => {
  render(<App />);

  expect(screen.findByTestId("Products")).toBeTruthy();
  expect(screen.findByTestId("Carts")).toBeTruthy();
});

// To test Products fetched rightly
test("loads and displays products", async () => {
  render(<App />);

  await screen.findByText("hero Product");
  await screen.findByText("Product 1");
  await screen.findByText("Product 2");
  await screen.findByText("Product 3");
  await screen.findByText("Product 4");
  await screen.findByText("Product 5");
  await screen.findByText("Product 6");
});

test("loads and displays products", async () => {
  render(<App />);

  const addCart1 = await (await screen.findByTestId("hero Product"))
    .children[3];
  userEvent.click(addCart1);
  const cartValue = Number(
    await (await screen.findByTestId("cartValue")).textContent
  );

  console.log(addCart1);

  expect(cartValue).toBe(cartValue);
});
