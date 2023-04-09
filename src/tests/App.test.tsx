import App from "../App";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import React from "react";
test("Renders main page correctly", async () => {
  // SetUp
  render(<App />);
  const buttonCount = await screen.findByRole("button");
  const codeCount = await screen.queryByText(/count is:/);

  // Pre Expectations
  expect(buttonCount.innerHTML).toBe("count is: 0");
  // Instead of:
  // expect(codeCount).toBeNull();
  expect(codeCount).toBeInTheDocument();

  // Init
  user.click(buttonCount);
  user.click(buttonCount);

  //Post Expectations
  expect(buttonCount.innerHTML).toBe("count is: 0");
  expect(await screen.queryByText(/count is:/)).toBeInTheDocument();
});
