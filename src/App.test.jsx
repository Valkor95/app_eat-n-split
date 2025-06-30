import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";
import UserList from "@organisms/UserList/UserList";

test("user list object", () => {
  render(<App />);
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(UserList).toBeDefined();
});
