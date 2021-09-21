import { render as rtlRender, screen } from "@testing-library/react";
import React from "react";
import { Header } from "../components";

const render = () => rtlRender(<Header />);

describe("Header", () => {
  test("should render without crash", () => {
    const { container } = render();
    expect(container).not.toBeNull();
  });

  test("Should render title", async () => {
    render();
    expect(
      screen.getByText("nunffsaid.com Coding Challenge")
    ).toBeInTheDocument();
  });
});
