// Test Case 1

//API Fetch Matches the number of Products

import React from "react";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

const renderApp = () => render(<App />);

test("Product render matches Prouct Name", async () => {
  let { getByTestId } = renderApp();

  const sourceInput = getByTestId("products");

  fireEvent.click(sourceInput);

  const Product = await getByTestId("hero Product");

  expect(Product.children[0].textContent).toEqual("hero Product");
});
