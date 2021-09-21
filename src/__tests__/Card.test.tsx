import { render as rtlRender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { act } from "react-dom/test-utils";
import { Card } from "../components";

const mockDeleteHandler = jest.fn();

const render = (children: string = "") =>
  rtlRender(
    <Card variant={0} onDelete={mockDeleteHandler}>
      {children}
    </Card>
  );

describe("Card", () => {
  test("should render without crash", () => {
    const { container } = render();
    expect(container).not.toBeNull();
  });

  test("Should render card elements", async () => {
    const children = "Some message for this card";
    render(children);
    expect(screen.getByText("clear")).toBeInTheDocument();
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  test("Should call handler when click on clear", async () => {
    render();
    const btn = screen.getByRole("button", { name: "clear" });
    act(() => userEvent.click(btn));
    expect(mockDeleteHandler).toBeCalled();
  });
});
