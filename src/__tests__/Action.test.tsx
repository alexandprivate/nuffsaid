import { render as rtlRender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Actions } from "../components";
import { NuffProvider } from "../context";

const render = () =>
  rtlRender(
    <NuffProvider>
      <Actions />
    </NuffProvider>
  );

describe("Action", () => {
  test("should render without crash", () => {
    const { container } = render();
    expect(container).not.toBeNull();
  });

  test("Should render action options and toggle the content of the start/stop button on each click", async () => {
    render();
    expect(screen.getByText("Stop")).toBeInTheDocument();
    expect(screen.getByText("Clear")).toBeInTheDocument();
    const startStopBtn = screen.getByRole("button", { name: "Stop" });
    act(() => userEvent.click(startStopBtn));
    expect(screen.getByText("Start")).toBeInTheDocument();
    act(() => userEvent.click(startStopBtn));
    expect(screen.getByText("Stop")).toBeInTheDocument();
  });
});
