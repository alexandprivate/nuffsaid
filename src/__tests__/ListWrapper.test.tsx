import { render as rtlRender, screen } from "@testing-library/react";
import faker from "faker";
import React from "react";
import { ListWrapper } from "../components";

const mockChildren = faker.company.companyName();

const render = (children: React.ReactNode = undefined) =>
  rtlRender(<ListWrapper>{children}</ListWrapper>);

describe("ListWrapper", () => {
  test("Should render without crash", () => {
    const { container } = render();
    expect(container).not.toBeNull();
  });

  test("Should the children prop", async () => {
    render(mockChildren);
    expect(screen.getByText(mockChildren)).toBeInTheDocument();
  });
});
