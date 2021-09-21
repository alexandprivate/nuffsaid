import { render as rtlRender, screen } from "@testing-library/react";
import faker from "faker";
import List, { IList } from "../components/list/List";
import { NuffProvider } from "../context";

const render = ({ title, type }: IList) =>
  rtlRender(
    <NuffProvider>
      <List title={title} type={type} />
    </NuffProvider>
  );

const mockListData: IList[] = [
  { title: faker.company.companyName(), type: "error" },
  { title: faker.company.companyName(), type: "warning" },
  { title: faker.company.companyName(), type: "info" },
];

describe("List", () => {
  test("should render without crash", () => {
    const { container } = render({ title: "", type: "error" });
    expect(container).not.toBeNull();
  });

  test.each(mockListData)("Should render title, counter", async (listData) => {
    render({ title: listData.title, type: listData.type });
    expect(screen.getByText(listData.title)).toBeInTheDocument();
    expect(screen.getByText(/count/i)).toBeInTheDocument();
  });
});
