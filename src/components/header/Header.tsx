import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 32px;
  border-bottom: solid 1px #888;
  margin-bottom: 10px;
`;

export const Header: React.FC = () => {
  return <StyledHeader>nunffsaid.com Coding Challenge</StyledHeader>;
};
