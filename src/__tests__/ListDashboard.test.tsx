import { render as rtlRender, screen } from "@testing-library/react";
import React from "react";
import { ListDashboard } from "../components";

const render = () => rtlRender(<ListDashboard />);

describe("ListDashboard", () => {
  test("Should render without crash", () => {
    const { container } = render();
    expect(container).not.toBeNull();
  });

  test("Should render the 3 list elements", async () => {
    render();
    expect(screen.queryAllByTestId("list")).toHaveLength(3);
  });
});
