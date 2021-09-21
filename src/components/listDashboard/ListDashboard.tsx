import React from "react";
import { List, ListWrapper } from "../../components";

export const ListDashboard: React.FC = () => {
  return (
    <ListWrapper>
      <List title="error type 1" type="error" />
      <List title="warning type 2" type="info" />
      <List title="info type 3" type="warning" />
    </ListWrapper>
  );
};
