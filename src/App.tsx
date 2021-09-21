import React from "react";
import { Actions, Header, ListDashboard } from "./components";
import { NuffProvider } from "./context";

const App: React.FC<{}> = () => {
  return (
    <NuffProvider>
      <Header />
      <Actions />
      <ListDashboard />
    </NuffProvider>
  );
};

export default App;
