import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";

export function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </React.Fragment>
  );
}
