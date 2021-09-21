import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";
import { useNuffContext } from "../../context";

export const Actions: React.FC = () => {
  const { handleToggleStart, toggleStart, handleClear } = useNuffContext();
  return (
    <Stack
      spacing={0.5}
      direction="row"
      justifyContent="center"
      alignItems="center"
      mb={3}
    >
      <Button variant="contained" color="success" onClick={handleToggleStart}>
        {toggleStart ? "Stop" : "Start"}
      </Button>
      <Button variant="contained" color="success" onClick={handleClear}>
        Clear
      </Button>
    </Stack>
  );
};
