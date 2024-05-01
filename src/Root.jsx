import { Box, Container, Stack } from "@mui/joy";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "views/dashboard/tools/Footer";
import Header from "views/dashboard/tools/Header";

function Root() {
  return (
    <Container sx={{ px: 0 }}>
      <Stack spacing={1}>
        <Header />
        <Box px={1} >
          <Outlet />
        </Box>
        <Footer />
      </Stack>
    </Container>
  );
}

export default Root;
