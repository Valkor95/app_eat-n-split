import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";
import UserList from "@organisms/UserList/UserList";
import { fireEvent } from "@testing-library/react";

test("user list object", () => {
  render(<App />);
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(UserList).toBeDefined();
});
test("renders sidebar with user list and add friend button", () => {
  render(<App />);
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /add friend/i })
  ).toBeInTheDocument();
});

test("selecting a friend shows BillForm", () => {
  render(<App />);

  const friendButtons = screen.getAllByRole("button");

  const friendButton = friendButtons.find(
    (btn) => !/add friend/i.test(btn.textContent)
  );
  expect(friendButton).toBeDefined();
  fireEvent.click(friendButton);
  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
    /split the bill with/i
  );
});

test("clicking the same friend twice deselects and hides BillForm", () => {
  render(<App />);
  const friendButtons = screen.getAllByRole("button");
  const friendButton = friendButtons.find(
    (btn) => !/add friend/i.test(btn.textContent)
  );
  fireEvent.click(friendButton);
  expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  fireEvent.click(friendButton);
  expect(screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
});
