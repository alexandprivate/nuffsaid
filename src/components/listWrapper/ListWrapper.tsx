import React from "react";
import { StyledListWrapper } from "./style";

export const ListWrapper: React.FC<IListWrapper> = ({ children }) => {
  return <StyledListWrapper>{children}</StyledListWrapper>;
};

interface IListWrapper {
  children: React.ReactNode;
}
